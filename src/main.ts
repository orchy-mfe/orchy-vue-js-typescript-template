import { App, createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import AppVue from "./App.vue";

import OrchyMicroFrontend from "@orchy-mfe/spa-adapter";
import { MicroFrontendProperties } from "@orchy-mfe/models";

export class VueMfeTypeScript extends OrchyMicroFrontend {
  private app: App<Element> | undefined;

  async mount(microFrontendProperties: MicroFrontendProperties) {
    this.app = createApp(AppVue);
    this.app.use(this.createAppRouter(microFrontendProperties));
    this.app.mount(this.getContainer());
  }

  createAppRouter(microFrontendProperties: MicroFrontendProperties) {
    return createRouter({
      history: createWebHistory(microFrontendProperties?.basePath),
      routes: [],
    });
  }

  async unmount() {
    if (this.app) {
      this.app.unmount();
      if (this.app._container) this.app._container.innerHTML = "";
    }
    this.app = undefined;
  }
}

customElements.define("vue-mfe-typescript", VueMfeTypeScript);
