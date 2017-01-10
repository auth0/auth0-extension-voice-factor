(function () {
    var ResponseCode = {
        SUCCESS: "SUC"
    };

    var recordings = [];

    function record(trigger, cb) {
        var mediaConstraints = {
            audio: true
        };

        navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError);

        function onMediaSuccess(stream) {
            var mediaRecorder = new MediaStreamRecorder(stream);

            mediaRecorder.mimeType = 'audio/wav';

            mediaRecorder.start(4000);

            var remaining = 3;
            trigger.text("RECORDING (4s)");
            var id = window.setInterval(function () {
                trigger.text("RECORDING (" + remaining-- + "s)");
            }, 1000);

            mediaRecorder.ondataavailable = function (blob) {
                window.clearInterval(id);
                trigger.text("START RECORDING");

                mediaRecorder.stop();

                cb(blob);
            };
        }

        function onMediaError(e) {
            console.error('media error', e);
        }
    }

    function route() {
        $("div.content").hide();

        switch (window.location.hash) {
            case "#/enrollment":
                $("#enrollment").show();
                break;

            default:
                $("#authentication").show();
                break;
        }
    }

    route();

    $("#enroll-start").click(function () {
        $("#enroll-alert-msg").parent().hide();
        
        record($(this), function (blob) {
            recordings.push(blob);

            var blobURL = URL.createObjectURL(blob);
            $("audio").attr("src", blobURL);

            $("#enroll-submit").attr("disabled", false);
        });
    });

    $("#enroll-submit").click(function () {
        var fileType = 'audio';

        var formData = new FormData();
        formData.append(fileType + '-blob', recordings[recordings.length - 1]);

        $.ajax({
            url: './api/enroll',
            headers: {
                "X-CSRF-Token": $("#csrf_token").val()
            },
            data: formData,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (result) {
                $("#enroll-submit").attr("disabled", true);

                switch (result.ResponseCode) {
                    case ResponseCode.SUCCESS:
                        $("audio").attr("src", "");

                        var count = recordings.length;

                        if (count < 4) {
                            $("#card-" + count + " i").attr("class", "card-docs-icon icon-budicon-470 green");
                        } else {
                            $("#enroll-start").attr("disabled", true);

                            window.location.hash = "#/authentication";

                            route();
                        }
                        break;

                    default:
                        recordings.pop();
                        $("#enroll-alert-msg").text(result.Result);
                        $("#enroll-alert-msg").parent().show();
                        break;
                }

            },
            error: function (error) {
                console.log(error);
                button.attr("disabled", false);
                $("#enroll-alert-msg").text("An unknown error occurred.");
                $("#enroll-alert-msg").parent().show();
            }
        });
    });

    $("#authenticate-start").click(function () {
        var button = $(this);

        $("#authenticate-alert-msg").parent().hide();

        record(button, function (blob) {
            button.attr("disabled", true);

            var fileType = 'audio';

            var formData = new FormData();
            formData.append(fileType + '-blob', blob);

            $.ajax({
                url: './api/authenticate',
                headers: {
                    "X-CSRF-Token": $("#csrf_token").val()
                },
                data: formData,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function (result) {
                    switch (result.ResponseCode) {
                        case ResponseCode.SUCCESS:
                            $("#continue").submit();
                            break;

                        default:
                            button.attr("disabled", false);
                            $("#authenticate-alert-msg").text(result.Result);
                            $("#authenticate-alert-msg").parent().show();
                            break;
                    }
                },
                error: function (error) {
                    console.log(error);
                    button.attr("disabled", false);
                    $("#authenticate-alert-msg").text("An unknown error occurred.");
                    $("#authenticate-alert-msg").parent().show();
                }
            });
        });
    });

    $("#authenticate-cancel").click(function () {
        $("#continue").submit();
    });

    $("#enroll-cancel").click(function () {
        $("#continue").submit();
    });
})();
