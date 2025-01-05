import { defineStore } from "pinia";
import axios from 'axios';
import optionsMovieRecs from "@/assets/scripts/options";
import { useIndexStore } from "@/store/indexStore.js"

export const useMovieRecsStore = defineStore("movieRecsStore", {
    state: () => ({
        path: 'https://api.themoviedb.org/3/movie/',
        recs: null,
    }),
    actions: {
        async getRecs(movieId) {
            this.trailer = null
            try {
                const res = await axios.get(`${this.path}${movieId}/recommendations?language=ru-RU`, optionsMovieRecs)
                const data = res.data
                this.recs = data.results
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        getMovieRecs: (state) => (count) => {
            return state.recs ? state.recs.slice(0, count) : []
        }
    }
})