import { createRouter, createWebHistory } from 'vue-router';

import { useUserStore } from '../store/userStore';

import Home from '../views/home/Home.vue';
import Hub from '../views/hub/Hub.vue';
import Guides from '../views/guides/Guides.vue';

import Auth from '../views/auth/Auth.vue';
import Profile from '../views/profile/Profile.vue';
import NotFound from '../components/wildcards/NotFound.vue';
import CreateGuideForm from '../views/create/CreateGuideForm.vue';

function validateUser() {
    const userStore = useUserStore();
    return userStore.isAuthenticated ? useUserStore.isAuthenticated : { path: '/auth' };
};

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/hub',
        component: Hub,
    },
    {
        path: '/guides',
        component: Guides,
    },
    {
        path: '/create',
        component: CreateGuideForm,
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth,
    },
    {
        path: '/profile',
        component: Profile,
        beforeEnter: validateUser,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
