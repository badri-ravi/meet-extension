# Google Meet Extension 

## Getting Started

1. `npm i` to install dependancies
2. navigate to `src/static/manifest.json` and insert your `google client_id`
3. sample google client_id : `153947023649-9jarfs25tsoa742tr60o00bp7b8vfew.apps.googleusercontent.com`, this is just a sample do not use this. 
4. `npm run build` to start the production build and  bundle files into the `dist` folder

## Loading The Chrome Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Toggle on `Developer mode` in the top right corner
3. Click `Load unpacked`
4. Select the entire `dist` folder

