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
                this.currentSessionToken = this.user.data.sessionToken;
                sessionStorage.setItem('user', JSON.stringify(userData));

                console.log(this.user);
                console.log(this.currentSessionToken);
            },
            getUser() {
                const user = sessionStorage.getItem('user');

                if (!user) {
                    return;
                }

                this.user = JSON.parse(user);
                this.isAuthenticated = true;
            },
            logoutUser() {
                this.isAuthenticated = false;
                this.user = null;
                sessionStorage.removeItem('user');
            },
        },
    },
);
