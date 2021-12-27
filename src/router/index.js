import Vue from 'vue'

// Import vue router
import Router from 'vue-router'

Vue.use(Router)

import {routes} from './routes'

const router = new Router({
    mode: 'history',
    routes
})

// Set title pages
const DEFAULT_TITLE = 'Base-Vue'
router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = DEFAULT_TITLE + ' | ' + to.meta.title || DEFAULT_TITLE
    })
})

export default router