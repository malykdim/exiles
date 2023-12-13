import { defineStore } from 'pinia';

export const useUserStore = defineStore(
    'user',
    {
        state: () => {
            return {
                isAuthenticated: false,
                user: null,
                currentSessionToken: null,
            };
        },
        actions: {
            setProfile(userData) {
                this.user = userData;
                this.isAuthenticated = true;
                this.currentSessionToken = userData.sessionToken;
                sessionStorage.setItem('user', JSON.stringify(this.userData));

                console.log(this.user);
                console.log(this.currentSessionToken);
            },
            getUser() {
                const user = sessionStorage.getItem('user');

                if (!user)
                    return;

                this.user = JSON.parse(user);
                this.isAuthenticated = true;
            },
            logout() {
                this.isAuthenticated = false;
                this.profile = null;
                sessionStorage.removeItem('user');
            },
        },
    },
);
