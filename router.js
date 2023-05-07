import { createWebHistory, createRouter } from "vue-router";
import HomePage from './src/pages/Home/Home';
import DonatePage from './src/pages/Donate/Donate'
import ErrorPage from './src/pages/Home/Error'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/donate',
        name: 'Donate',
        component: DonatePage
    },
    {
        path: '/:pathMatch(.*)*',
        component: ErrorPage
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});

export default router;