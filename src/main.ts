import { App, createApp } from "vue";
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import AppVue from "./App.vue";

let app: App<Element> | undefined = undefined;

const rootSelector = "#app";

const createAppRouter = (props: QiankunProps) =>
  createRouter({
    history: createWebHistory(props.baseUrl),
    routes: [],
  });

const render = (props: QiankunProps) => {
  app = createApp(AppVue);
  app.use(createAppRouter(props));
  app.mount(
    (props.container?.querySelector(rootSelector) as HTMLElement) ||
      rootSelector
  );
};

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount() {
    app?.unmount();
    if (app?._container) app._container.innerHTML = "";
    app = undefined;
  },
  update() {
    console.log("bootstrap");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
