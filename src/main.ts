import { App, createApp } from "vue";
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper";
import "./style.css";
import AppVue from "./App.vue";

let root: App<Element> | undefined = undefined;

const rootSelector = "#app";

const render = ({ container }: QiankunProps) => {
  root = createApp(AppVue);
  root.mount(
    container
      ? (container.querySelector(rootSelector) as HTMLElement)
      : rootSelector
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
    root?.unmount();
    if (root?._container) root._container.innerHTML = "";
    root = undefined;
  },
  update() {
    console.log("bootstrap");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
