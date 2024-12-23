import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'

export const routers = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/movie', name: 'movie', component: () => import('@/pages/Films.vue')},
        {path: '/tv', name: 'tv', component: () => import('@/pages/Serials.vue')},
        {path: '/search', name: 'search', component: () => import('@/pages/Search.vue')},
        {path: '/movie/:id', name: 'movieid', component: () => import('@/pages/FilmsId.vue')},
        {path: '/tv/:id', name: 'serialid', component: () => import('@/pages/SerialsId.vue')},
    ]
})