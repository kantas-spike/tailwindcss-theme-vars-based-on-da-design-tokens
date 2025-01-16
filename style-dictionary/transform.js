// 以下を流用
// [design-tokens/style-dictionary/transform.ts at develop · digital-go-jp/design-tokens](https://github.com/digital-go-jp/design-tokens/blob/develop/style-dictionary/transform.ts)

import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

register(StyleDictionary, {
  excludeParentKeys: true,
});

StyleDictionary.registerFilter({
  name: "tokens-filter",
  filter: (token) => {
    if (token.path.length === 0) {
      return true;
    }
    return token.path[0] !== "tokenSetOrder";
  },
});

const sd = new StyleDictionary("style-dictionary/config.json");

const run = async (sd) => {
  await sd.hasInitialized;
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

run(sd);
