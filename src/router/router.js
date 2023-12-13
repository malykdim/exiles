import { createRouter, createWebHistory } from 'vue-router';

import { useUserStore } from '../store/userStore';

import Home from '../views/home/Home.vue';
import Hub from '../views/hub/Hub.vue';
import Guides from '../views/guides/Guides.vue';
import Auth from '../views/auth/Auth.vue';
import Profile from '../views/profile/Profile.vue';
import NotFound from '../components/wildcards/NotFound.vue';
import CreateGuideForm from '../views/create/CreateGuideForm.vue';
import Details from '../views/details/Details.vue';

function validateUser() {
    const userStore = useUserStore();
    return userStore.isAuthenticated ? useUserStore.isAuthenticated : { path: '/login' };
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
        path: '/guides/:id',
        component: Details,
    },
    {
        path: '/create',
        component: CreateGuideForm,
        // beforeEnter: validateUser,
    },
    {
        path: '/login',
        name: 'auth',
        component: Auth,
        beforeEnter: () => {
            const userStore = useUserStore();
            return userStore.isAuthenticated ? { path: '/profile' } : true;
        },
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
