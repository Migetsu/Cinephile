import { defineStore } from "pinia";
import axios from 'axios';
import optionsPopularTV from "@/assets/scripts/options";
import { useIndexStore } from "@/store/indexStore.js"

export const usePopularTvsStore = defineStore("popularTvsStore", {
    state: () => ({
        path: 'https://api.themoviedb.org/3/trending/tv/day?language=ru-RU',
        popularTvs: null
    }),
    actions: {
        async getPopularTvs() {
                try {
                    const res = await axios.get(`${this.path}`, optionsPopularTV)
                    const data = res.data.results
                    this.popularTvs = data
                } catch (error) {
                    console.log(error);
                }
        }
    },
    getters: {}
})