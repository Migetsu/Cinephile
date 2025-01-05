import { defineStore } from "pinia";
import axios from 'axios';
import optionsMovieRecs from "@/assets/scripts/options";
import { useIndexStore } from "@/store/indexStore.js"

export const useMovieTrailerStore = defineStore("movieTrailerStore", {
    state: () => ({
        path: 'https://api.themoviedb.org/3/movie/',
        trailer: null,
    }),
    actions: {
        async getTrailer(movieId) {
            this.trailer = null
            try {
                const res = await axios.get(`${this.path}${movieId}/videos?language=ru-RU`, optionsMovieRecs)
                const data = res.data
                this.trailer = data
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {}
})