import { defineStore } from "pinia";
import axios from 'axios';
import optionsActors from "@/assets/scripts/options";

export const useActorStore = defineStore("actorStore", {
  state: () => ({
    path: 'https://api.themoviedb.org/3/',
    actorsMovie: null,
    actorsTv: null,
  }),
  actions: {
    async getActors({ id, type }) {
      try {
        const res = await axios.get(`${this.path}${type}${id}/credits?language=ru-RU`, optionsActors)
        const data = res.data.cast
        if (type === '/movie/') this.actorsMovie = data
        else this.actorsTv = data
      } catch (error) {
        console.log(error)
      }
    },
    clearActorsMovie() {
      this.actorsMovie = null
    },
    clearActorsTv() {
      this.actorsTv = null
    }
  },
  getters: {
    getMovieActors: (state) => (count) => {
      return state.actorsMovie ? state.actorsMovie.slice(0, count) : []
    },
    getTvActors: (state) => (count) => {
      return state.actorsTv ? state.actorsTv.slice(0, count) : []
    },
  },
})