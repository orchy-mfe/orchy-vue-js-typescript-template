import { MicrofrontendProperties } from "@orchy-mfe/models";
import "vite-plugin-qiankun/dist/helper";

declare module "vite-plugin-qiankun/dist/helper" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface QiankunProps extends MicrofrontendProperties<any> {}
}
