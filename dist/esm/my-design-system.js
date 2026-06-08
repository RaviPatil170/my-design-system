import { p as promiseResolve, b as bootstrapLazy } from './index-C-yzoIz-.js';
export { s as setNonce } from './index-C-yzoIz-.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.43.5 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["custom-button",[[513,"custom-button",{"label":[1]}]]],["my-component",[[513,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
