import { defineStore } from 'pinia';

const useGuidesStore = defineStore('guides', {
    state: () => ({
        guides: [1, 2, 3],
    }),
    getters: {
        showFirst(state) {
            return state.guides[0];
        },
        showAgain() {
            return `first in the array: ${this.showFirst}`;
        },
    },
    actions: {
        updateGguides(arg1) {
            console.log('updateGguides ', arg1);
            this.guides = arg1;
        },
    },
});

export default useGuidesStore;
