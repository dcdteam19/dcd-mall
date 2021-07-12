import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import { Lazyload } from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/index.less'
import './assets/css/font.css'

createApp(App).use(vant).use(Lazyload).use(store).use(router).mount('#app')
