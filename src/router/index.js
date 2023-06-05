import {createRouter, createWebHistory} from 'vue-router'

import home from '@/views/Home_page.vue'

import cv from '@/views/CV.vue'

const routes = [
    {path: '/', name: 'home', component: home,},
    {path: '/cv', name: 'cv', component: cv,},
]

const router = createRouter( {
    history: createWebHistory(),
    routes,
})

export default router