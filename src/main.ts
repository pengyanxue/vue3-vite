/*
 * @Author: pengyanxue
 * @Date: 2021-04-29 11:37:59
 * @LastEditors: pengyanxue
 * @LastEditTime: 2021-04-29 14:05:27
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(ElementPlus).use(store).mount('#app')
