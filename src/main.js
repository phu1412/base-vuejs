import Vue from 'vue'
import AppLayout from './layout/index'

Vue.config.productionTip = false

// Import vue router
import router from "./router"

// Import VueX
import store from  './store'

// Import bootstrap
import 'bootstrap'

new Vue({
    router,
    render: h => h(AppLayout),
    store
}).$mount('#app')
