import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('./views/start/Welcome.vue')
        },
        {
            path: '/start/arborescence',
            name: 'tree',
            component: () => import('./views/start/Tree.vue')
        },
        {
            path: '/vision/history',
            name: 'history',
            component: () => import('./views/vision/History.vue')
        }
    ]
})
