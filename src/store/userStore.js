import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            isAuthenticated: false,
            profile: null,
        };
    },
    actions: {
        setProfile(profileData) {
            this.profile = profileData;
            this.isAuthenticated = true;
        },
    },
});
