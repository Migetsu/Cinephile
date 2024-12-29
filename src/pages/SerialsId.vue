<template>
    <div class="main" v-if="tv">
      <div class="main__contentId">
        <div class="main__contentId-media">
          <img :src="indexStore.imageFullUrl + tv.backdrop_path" alt="" class="main__contentId-media-poster">
          <div class="main__contentId-media-block">
            <div class="main__contentId-media-left">
              <h1 class="main__contentId-media-left-title">{{ tv.name }}</h1>
              <p class="main__contentId-media-left-text">{{ tv.overview }}</p>
              <p class="main__contentId-media-left-genre">
                <span class="main__contentId-media-date">{{ new Date(tv.first_air_date).getFullYear() }}</span>
                <span v-for="genre in tv.genres" :key="genre.id">{{ genre.name }}</span>
              </p>
            </div>
            <div class="main__contentId-media-right">
              <img :src="indexStore.imageFullUrl + tv.poster_path" alt="">
            </div>
            <div class="main__contentId-media-actors">
              <h2 class="main__contentId-media-title">В главных ролях</h2>
              <div class="main__contentId-media-casts">
                <Actor type="/tv/" :id="tv.id" :count="6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="loading" v-else>
      <div class="loading__spiner"></div>
    </div>
  </template>
  
  <script setup>
  import { useIndexStore } from "@/store/indexStore.js"
  import { useTvStore } from "@/store/modules/tvStore.js"
  import { onMounted, computed } from "vue"
  import { useRoute } from 'vue-router';
  
  const tvStore = useTvStore()
  const indexStore = useIndexStore()
  const route = useRoute();
  
  const tv = computed(() => tvStore.tv)
  
  onMounted(async () => {
    await tvStore.getTvById(route.params.id)
  });
  </script>
  
  <style></style>