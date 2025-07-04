


import Homepage from '@/pages/Homepage.vue';
import PortfolioPage from '@/pages/PortfolioPage.vue';

import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Homepage
    },



    {
        path: '/Portfolio',
        name: 'Portfolio',
        component: PortfolioPage
    }
]



const router = createRouter({
    'history': createWebHistory(),
    routes
});
export default router;