import { defineStore } from "pinia";
import axios from 'axios';
import optionsSearching from "@/assets/scripts/options";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    path: 'https://api.themoviedb.org/3/search/multi',
    searchData: null
  }),
  actions: {
    async getSearchData(search) {
        try {
          const res = await axios.get(`${this.path}?query=${search}&include_adult=false&language=ru-RU&page=1`, optionsSearching)
          const data = res.data.results
          this.searchData = data
        } catch (error) {
          console.log(error)
        }
      },
      resetSearch() {
        this.searchData = null
      }
  },
  getters: {},
})