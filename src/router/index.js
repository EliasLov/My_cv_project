import {createRouter, createWebHistory} from 'vue-router'

import github from '@/views/Github.vue'

import cv from '@/views/CV.vue'

import ai from '@/views/WiseWordsFromAi.vue'

 
const routes = [
    {path: '/', name: 'cv', component: cv,},

    {path: '/github', name: 'github', component: github,},

    {path: '/ai', name: 'ai', component: ai,},
]

const router = createRouter( {
    history: createWebHistory(),
    routes,
})

export default router