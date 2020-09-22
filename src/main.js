import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import { VueFormBuilderPlugin } from 'v-form-builder'
import 'v-form-builder/dist/v-form-builder.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

Vue.use(VueFormBuilderPlugin, {})
Vue.use(VueAxios, axios)