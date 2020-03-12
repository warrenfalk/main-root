# main-root
Get the root path of the app you are installed in

Works with
  * npm
  * npm link
  * yarn
  * yarn link
  * yarn workspaces
  * yarn 2 (PnP)
  * yarn 2 workspaces
  * pnpm


```
npm i main-root
yarn add main-root
```

```javascript
const mainRoot = require('main-root');
console.log(`Path to root of app: ${mainRoot.path}`);
```
