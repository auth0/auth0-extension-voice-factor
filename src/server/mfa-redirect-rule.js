function voicefactor(user, context, callback) {
    var crypto = require("crypto");
    var jwt = require("jsonwebtoken@7.1.9");

    var config = {
        signingKey: "${SIGNING_KEY_PLACEHOLDER}",
        encryptionKey: "${ENCRYPTION_KEY_PLACEHOLDER}",
        extensionUrl: "${APP_URL_PLACEHOLDER}"
    };

    function encrypt(data) {
        var key = new Buffer(config.encryptionKey, "base64");
        var iv = crypto.randomBytes(16);

        var cipher = crypto.createCipheriv("aes-128-cbc", key, iv);

        var encrypted = cipher.update(data, "utf8", "base64");
        encrypted += cipher.final("base64");

        return `${iv.toString("base64")}:${encrypted}`;
    }

    // Start by checking if we are handling a redirect callback
    if (context.protocol === "redirect-callback") {
        if (!user.metadata.vit_enrollment) {
            // Receiving a callback for a user that the rule did not request redirect so ignore
            return callback(null, user, context);
        }

        var token = context.request.query.token;
        var state = context.request.query.state;

        try {
            var payload = jwt.verify(token, config.signingKey, {
                algorithms: ["HS256"]
            });

            if (payload.sub !== user.user_id) {
                return callback(new UnauthorizedError("User mismatch."));
            }

            if (!payload.vit_authenticated) {
                return callback(new UnauthorizedError("User did not complete authentication."));
            }

            if (payload.nonce !== state) {
                return callback(new UnauthorizedError("Session and token mismatch."));
            }

            if (!user.metadata.vit_enrollment.completed) {
                user.metadata.vit_enrollment.completed = true;

                auth0.users.updateAppMetadata(user.user_id, user.metadata).then(function () {
                    callback(null, user, context);
                }).catch(function (err) {
                    callback(err);
                });
            } else {
                return callback(null, user, context);
            }
        } catch (error) {
            return callback(new UnauthorizedError("Unexpected failure."));
        }
    } else {
        var promise = Promise.resolve(1);

        // Ensure user has VoiceIt related metadata
        user.app_metadata = user.app_metadata || {};

        if (!user.app_metadata.vit_enrollment) {
            user.app_metadata.vit_enrollment = {
                id: user.user_id + "@vit.invalid",
                secret: encrypt(crypto.randomBytes(6).toString("hex")),
                language: "en-US",
                completed: false
            };

            promise = auth0.users.updateAppMetadata(user.user_id, user.app_metadata);
        }

        // Continue after knowing that metadata has been set
        promise.then(function () {
            // Redirect the user to the extension
            var claims = {
                sub: user.user_id,
                name: user.name,
                jti: crypto.randomBytes(16).toString("hex"),
                vit_id: user.app_metadata.vit_enrollment.id,
                vit_secret: user.app_metadata.vit_enrollment.secret,
                vit_lang: user.app_metadata.vit_enrollment.language,
                vit_enrolled: user.app_metadata.vit_enrollment.completed
            };

            var token = jwt.sign(claims, config.signingKey, { expiresIn: 60 });

            var redirectUrl = config.extensionUrl;

            redirectUrl += "?token=" + token;
            redirectUrl += user.app_metadata.vit_enrollment.completed ? "#/authentication" : "#/enrollment";

            context.redirect = { url: redirectUrl };

            callback(null, user, context);
        }).catch(function (err) {
            callback(err);
        });
    }
}