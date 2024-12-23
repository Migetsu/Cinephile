import { defineStore } from "pinia";
import axios from 'axios';
import optionsTvById from "@/assets/scripts/options";
import { useIndexStore } from "@/store/indexStore.js"

export const useTvStore = defineStore("tvStore", {
    state: () => ({
        path: 'https://api.themoviedb.org/3/tv/',
        tv: null,
        selectedId: null,
        selectedTv: null,
        index: null,
    }),
    actions: {
        async getTvById(tvId) {
            try {
                const res = await axios.get(`${this.path}${tvId}?language=ru-RU`, optionsTvById)
                const data = res.data
                this.tv = data
            } catch (error) {
                console.log(error);
            }
    }
    },
    getters: {}
})