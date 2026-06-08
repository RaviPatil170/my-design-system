import { b as bootstrapLazy } from './index-C-yzoIz-.js';
export { s as setNonce } from './index-C-yzoIz-.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["custom-button",[[513,"custom-button",{"label":[1]}]]],["my-component",[[513,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
};

export { defineCustomElements };
