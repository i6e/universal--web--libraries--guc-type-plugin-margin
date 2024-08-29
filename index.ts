import { TypePlugin } from "@icehouse/universal--web--libraries--guc-core";
import { MBTypePlugin } from "./lib/plugins/MBTypePlugin";
import { METypePlugin } from "./lib/plugins/METypePlugin";
import { MLTypePlugin } from "./lib/plugins/MLTypePlugin";
import { MRTypePlugin } from "./lib/plugins/MRTypePlugin";
import { MSTypePlugin } from "./lib/plugins/MSTypePlugin";
import { MTTypePlugin } from "./lib/plugins/MTTypePlugin";
import { MTypePlugin } from "./lib/plugins/MTypePlugin";
import { MXTypePlugin } from "./lib/plugins/MXTypePlugin";
import { MYTypePlugin } from "./lib/plugins/MYTypePlugin";

export interface MarginTypePluginTheme {
  margin: Record<string, string | number>;
}

export const MarginTypePlugins: TypePlugin<MarginTypePluginTheme>[] = [
  MTypePlugin,
  MXTypePlugin,
  MYTypePlugin,
  MLTypePlugin,
  MRTypePlugin,
  MTTypePlugin,
  MBTypePlugin,
  MSTypePlugin,
  METypePlugin,
];

export {
  MBTypePlugin,
  METypePlugin,
  MLTypePlugin,
  MRTypePlugin,
  MSTypePlugin,
  MTTypePlugin,
  MTypePlugin,
  MXTypePlugin,
  MYTypePlugin,
};
