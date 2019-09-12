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
            path: '/start/developer',
            name: 'developer',
            component: () => import('./views/start/developer.vue')
        },
        {
            path: '/vision/mission',
            name: 'mission',
            component: () => import('./views/vision/Mission.vue')
        },
        {
            path: '/vision/values',
            name: 'values',
            component: () => import('./views/vision/Values.vue')
        },
        {
            path: '/vision/philosophy',
            name: 'philosophy',
            component: () => import('./views/vision/Philosophy.vue')
        },
        {
            path: '/vision/founder',
            name: 'founder',
            component: () => import('./views/vision/Founder.vue')
        },
        {
            path: '/vision/manifesto',
            name: 'manifesto',
            component: () => import('./views/vision/Manifesto.vue')
        },
        {
            path: '/vision/history',
            name: 'history',
            component: () => import('./views/vision/History.vue')
        },
        {
            path: '/functionalities/fusion',
            name: 'Fusion',
            component: () => import('./views/functionalities/fusion.vue')
        },
        {
            path: '/functionalities/mobile',
            name: 'mobile',
            component: () => import('./views/functionalities/mobile version.vue')
        },
        {
            path: '/functionalities/search',
            name: 'search',
            component: () => import('./views/functionalities/search.vue')
        },
        {
            path: '/functionalities/share',
            name: 'share',
            component: () => import('./views/functionalities/share.vue')
        },
        {
            path: '/functionalities/tags',
            name: 'tags',
            component: () => import('./views/functionalities/tags.vue')
        },
        {
            path: '/tech/github',
            name: 'Github',
            component: () => import('./views/tech/Github.vue')
        },
        {
            path: '/tech/ne04j',
            name: 'Neo4J',
            component: () => import('./views/tech/Neo4J.vue')
        },
        {
            path: '/tech/vuejs',
            name: 'Vue.JS',
            component: () => import('./views/tech/Vue.JS.vue')
        },
        {
            path: '/businessPlan/compare',
            name: 'compare',
            component: () => import('./views/businessPlan/comparison.vue')
        },
        {
            path: '/businessPlan/finance',
            name: 'finance',
            component: () => import('./views/businessPlan/finance.vue')
        },
        {
            path: '/businessPlan/target',
            name: 'target',
            component: () => import('./views/businessPlan/target.vue')
        }
    ]
})
