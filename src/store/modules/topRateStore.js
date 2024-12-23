import { defineStore } from "pinia";
import axios from 'axios';
import optionsTopRate from "@/assets/scripts/options";
import { useIndexStore } from "@/store/indexStore.js"

export const useTopRateStore = defineStore("topRateStore", {
    state: () => ({
        path: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
        topRate: null
    }),
    actions: {
        async getTop() {
            try {
                const res = await axios.get(`${this.path}`, optionsTopRate)
                const data = res.data.results
                const top10 = []
                data.forEach(item => {
                    if (top10.length < 10) {
                        top10.push(item)
                    }
                })
                this.topRate = top10
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {}
})