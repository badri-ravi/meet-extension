# Google Meet Extension 

This extension uses the google calendar API. As there is no direct API to create a google meet link. Google calendat API solved this issue for both standard Google account and Google workspace users. 

## Getting Started

1. `npm i` to install dependancies
2. `npm run build` to start the production build and  bundle files into the `dist` folder

## Loading The Chrome Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Toggle on `Developer mode` in the top right corner
3. Click `Load unpacked`
4. Select the entire `dist` folder

## Creating Google OAuth Credentials 
1. Please go to Google Developer Console
2. Select the  `Create Credentials` section. 
3. Select `OAuth Client ID`
4. Select the Application type as `Chrome App`
5. In the Application ID section, copy the extension's id. 
6. After generating the OAuth credentials, copy the `client_id` and paste it in the manifest.json `oauth2.client_id` field. 
