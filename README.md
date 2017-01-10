# Auth0 Voice Authentication Extension

This extension illustrates how it's possible to use voice authentication as an additional authentication factor when performing user authentication through Auth0.

## How it works

1. The user initiates the authentication process by providing the first authentication factor (usually a username and password);
2. After successfully completing the first step, a rule, redirects the user to a web application running as a webtask where he'll be able to perform voice authentication;
3. For first-time users they will need to complete a voice enrollment procedure before being allowed to authenticate using their voice;
4. For recurring users, they just need to complete the authenticate process using their voice;
5. After completing voice authentication the user is redirected back to Auth0 which completes the process and performs the final redirect to the application that started the authentication process.

The voice enrollment and authentication is performed by integrating with VoiceIt API. All the integration work is done by the extension itself so the only thing you need to provide is your VoiceIt developer identifier. For the purposes of this extension each user is uniquely identified by their assigned Auth0 user identifier and the provision of users in the VoiceIt API is also done automatically based on that unique identifier.

In order to comply with the VoiceIt API requirements each user will have an associated secret; this secret is generated automatically and stored encrypted within the Auth0 user profile.

## Getting started

### Local development

Start by creating a `Client` in your Auth0 account and give it `read/create/update/delete:rules` access to the Auth0 Management API.

Then create a `dev-local-config.json` file under `./src/runtimes/` containing the following settings:

```json
{
  "Auth0Domain": "[account].auth0.com",
  "Auth0ClientId": "[identifier of a CC grant enabled client with permissions to manage rules]",
  "Auth0ClientSecret": "[client secret associated with the previously specified identifier]",
  "ExtensionSecret": "[secret used to validate calls to extension installation hooks]",
  "VoiceItDeveloperId": "[VoiceIt developer identifier]",
  "EncryptionKey": "[base64 encoded encryption key (AES 128)]"
}
```

To run the extension locally:

```bash
npm install
npm start
```

By default the application will be made available at `https://voicefactor.localtest.me:7100/`.

Given that when running locally you did not went through the extension installation procedure in Auth0 Dashboard you'll need to simulate a call to the installation hook so that a redirect rule pointing to your local environment is created.

You can simulate an installation hook call by performing a `POST` request to `https://voicefactor.localtest.me:7100/.extensions/on-install` and providing a JWT as bearer authentication. The JWT will need to have an `iss` equal to `https://[account].auth0.com`, an `aud` equal to `https://voicefactor.localtest.me:7100/.extensions/on-install` and be signed (HS256) using the extension secret you configured previously.

### Install as Auth0 extension

Go to the [Extensions](https://manage.auth0.com/#/extensions) tab of the dashboard.

Click **CREATE EXTENSION** and install the extension from this repository. When running as an extension most of the configuration needs are automatically provisioned during the installation process, however, you'll still need to provide the following information when initiating the install process:

* *VIT_DEVELOPER_ID* - The developer ID assigned when you registered a VoiceIt account.
* *ENCRYPTION_KEY* - An AES 128 encryption key (encoded in base64) that will be used to encrypt sensitive information when in transit or when stored as part of the Auth0 user profile.

### Uninstalling

If you uninstall the extension the redirect rule and extension client that were created automically during the install process will also be removed. However, information about user enrollment is not removed from each individual user. This means you can later re-install the extension and reuse the information associated with users that already went through the enrollment procedure. However, for this to work correctly you need to use the same encryption key as before.

## Disclaimer

The purpose of this extension is to illustrate how to integrate additional custom authentication steps into the Auth0 authentication pipeline. The provided code should be considered sample code and used only after being thorougly reviewed. In particular, error handling is not meant to be complete and the components of the application that run within the browser depend on resources available in public CDN's.