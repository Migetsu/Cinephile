import { defineStore } from "pinia";
import axios from 'axios';
import optionsMovieById from "@/assets/scripts/options";
import { useIndexStore } from "@/store/indexStore.js"

export const useMovieStore = defineStore("movieStore", {
    state: () => ({
        path: 'https://api.themoviedb.org/3/movie/',
        movie: null,
        selectedId: null,
        selectedMovie: null,
        index: null,
        runtime: null
    }),
    actions: {
        async getMovieById(movieId) {
            try {
                const res = await axios.get(`${this.path}${movieId}?language=ru-RU`, optionsMovieById)
                const data = res.data
                this.movie = data
                this.runtime = `${Math.floor(data.runtime / 60)}ч ${data.runtime % 60}м`
            } catch (error) {
                console.log(error);
            }
    }
    },
    getters: {}
})