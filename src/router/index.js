


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
        // use lowercase path to match links in templates
        path: '/portfolio',
        name: 'Portfolio',
        component: PortfolioPage
    },
    {
        // simple contact route — PortfolioPage already contains a contact modal
        path: '/contact',
        name: 'Contact',
        component: PortfolioPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;