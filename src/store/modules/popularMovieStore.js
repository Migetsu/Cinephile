import { defineStore } from "pinia";
import axios from 'axios';
import optionsPopularMovie from "@/assets/scripts/options";
import { useIndexStore } from "@/store/indexStore.js"

export const usePopularMovieStore = defineStore("popularMovieStore", {
    state: () => ({
        path: 'https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=1',
        popularMovies: null
    }),
    actions: {
        async getPopularMovie() {
                try {
                    const res = await axios.get(`${this.path}`, optionsPopularMovie)
                    const data = res.data.results
                    this.popularMovies = data
                } catch (error) {
                    console.log(error);
                }
        }
    },
    getters: {}
})