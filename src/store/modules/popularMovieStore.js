import { defineStore } from "pinia";
import axios from 'axios';
import optionsPopularMovie from "@/assets/scripts/options";
import { useIndexStore } from "@/store/indexStore.js"

export const usePopularMovieStore = defineStore("popularMovieStore", {
    state: () => ({
        path: 'https://api.themoviedb.org/3/',
        popularMovies: null
    }),
    actions: {
        async getPopularMovie(page = 1) {
                try {
                    const res = await axios.get(`${this.path}movie/popular?language=ru-RU&page=${page}`, optionsPopularMovie)
                    const data = res.data.results
                    this.popularMovies = data
                } catch (error) {
                    console.log(error);
                }
        }
    },
    getters: {}
})