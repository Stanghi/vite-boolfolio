import { createRouter, createWebHistory } from 'vue-router';

import Home from './js/pages/Home.vue';
import About from './js/pages/About.vue';
import Contacts from './js/pages/Contact.vue';
import Projects from './js/pages/Projects.vue';
import Error404 from './js/pages/Error404.vue';

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
        },
        {
            path: '/:pathMatch(.*)*',
            component: Error404,
        },
    ],
});

export { router };
