import { defineStore } from "pinia";
import axios from 'axios';
import optionsActors from "@/assets/scripts/options";
import { useIndexStore } from "@/store/indexStore.js"

export const useActorStore = defineStore("actorStore", {
    state: () => ({
        path: 'https://api.themoviedb.org/3/',
        actorsMovie: null,
        actorsTv: null,
        getMovieActors(payload) {
            this.actorsMovie = payload
        },

        getTvActors(payload) {
            this.actorsTv = payload
        }
    }),
    actions: {
        async getActors(info) {
            let { id, type } = info
            try {
                const res = await axios.get(`${this.path}${type}${id}/credits?language=ru-RU`, optionsActors)
                const data = res.data.cast
                if (type == '/movie/') this.getMovieActors(data)
                else this.getTvActors(data)
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        getMovieActorss: state => count => {
            return state.actorsMovie.slice(0, count)
        },

        getTvActorss: state => count => {
            return state.actorsTv.slice(0, count)
        }
    }
})