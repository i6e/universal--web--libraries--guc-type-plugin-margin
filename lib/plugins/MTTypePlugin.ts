import { TypePlugin } from "@icehouse/universal--web--libraries--guc-core";
import { MarginTypePluginTheme } from "../..";
import { cssContent } from "../common/cssContent";
import { isValidClass } from "../common/isValidClass";

const PREFIX = "mt-";

export const MTTypePlugin: TypePlugin<MarginTypePluginTheme> = {
  prefixes: [PREFIX],
  isValidClass: isValidClass(PREFIX),
  cssContent: cssContent(PREFIX, (value) => `margin-top:${value};`),
};
