import { defineStore } from "pinia";

export const useIndexStore = defineStore("indexStore", {
    state: () => ({
        apiKey: '3d8741817180c2559fec3e26f5cb7030',
        imageFullUrl: 'https://image.tmdb.org/t/p/original/',
        imageUrl: 'https://image.tmdb.org/t/p/w500/'
    }),
    actions: {},
    getters: {},
})