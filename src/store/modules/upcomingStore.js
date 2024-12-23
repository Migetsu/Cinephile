import { defineStore } from "pinia";
import axios from "axios";
import { useIndexStore } from "@/store/indexStore.js"

export const useUpcomingStore = defineStore("upcomingStore", {
    state: () => ({
        upcomingPath: 'https://api.themoviedb.org/3/movie/upcoming',
        upcoming: null
    }),
    actions: {
        async getUpcoming() {
            try {
                let indexStore = useIndexStore()
                const res = await axios.get(`${this.upcomingPath}?api_key=${indexStore.apiKey}&language=ru-RU&page=1`)
                const results = res.data.results
                this.upcoming = results
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {}
})