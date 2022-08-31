import { App, createApp } from 'vue'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import './style.css'
import AppVue from './App.vue'

let root: App<Element> | undefined = undefined

const rootSelector = '#app'

const render = ({ container }: QiankunProps) => {
    root = createApp(AppVue)
    root.mount(container ? container.querySelector(rootSelector)! : rootSelector)
}

renderWithQiankun({
    mount(props) {
        render(props)
    },
    bootstrap() { },
    unmount() {
        root?.unmount()
        if (root?._container) root._container.innerHTML = ''
        root = undefined
    },
    update() { }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({})
}
