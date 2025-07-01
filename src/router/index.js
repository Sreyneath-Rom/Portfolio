

import Aboutpage from '@/components/Aboutpage.vue';
import Contactpage from '@/components/Contactpage.vue';
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
        path: '/About',
        name: 'About',
        component: Aboutpage
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contactpage
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