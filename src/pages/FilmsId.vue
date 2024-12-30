<template>
  <div class="main" v-if="movie">
    <div class="main__contentId">
      <div class="main__contentId-media">
        <img :src="indexStore.imageFullUrl + movie.backdrop_path" alt="" class="main__contentId-media-poster">
        <div class="main__contentId-media-block">
          <div class="main__contentId-media-left">
            <h1 class="main__contentId-media-left-title">{{ movie.title }}</h1>
            <p class="main__contentId-media-left-text">{{ movie.overview }}</p>
            <p class="main__contentId-media-left-genre">
              <span class="main__contentId-media-date">{{ new Date(movie.release_date).getFullYear() }}</span>
              <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</span>
            </p>
          </div>
          <div class="main__contentId-media-right">
            <img :src="indexStore.imageFullUrl + movie.poster_path" alt="">
          </div>
          <div class="main__contentId-media-actors">
            <h2 class="main__contentId-media-title">В главных ролях</h2>
            <div class="main__contentId-media-casts">
              <Actor type="/movie/" :id="movie.id" :count="6" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__budgetBlock container">
      <div class="main__budgetBlock-item budgetBlock-title">Бюджет</div>
      <div class="main__budgetBlock-item budgetBlock-title">Сборы</div>
      <div class="main__budgetBlock-item budgetBlock-title">Статус</div>
      <div class="main__budgetBlock-item budgetBlock-title">Исходное название</div>
      <div class="main__budgetBlock-item budgetBlock-descr">{{ `$${movie.budget.toLocaleString('de-DE')}` }}</div>
      <div class="main__budgetBlock-item budgetBlock-descr">{{ `$${movie.revenue.toLocaleString('de-DE')}` }}</div>
      <div class="main__budgetBlock-item budgetBlock-descr">{{ movie.status }}</div>
      <div class="main__budgetBlock-item budgetBlock-descr">{{ movie.original_title }}</div>
    </div>
    <div class="main__recomendations container">
      <h3 class="main__recomendations-title">Рекомендации</h3>
      <div class="main__recomendations-list">
        <router-link to="#" class="main__recomendations-item" v-for="(rec, idx) in countOfRecs" :key="idx">
          <img src="@/assets/images/introMiniImg.png" alt="" class="main__recomendations-item-img">
          <h2 class="main__recomendations-item-name">{{ movie.title }}</h2>
        </router-link>
      </div>
    </div>
  </div>
  <div class="loading" v-else>
    <div class="loading__spiner"></div>
  </div>
</template>

<script setup>
import { useIndexStore } from "@/store/indexStore.js"
import { useMovieStore } from "@/store/modules/movieStore.js"
import { onMounted, computed, reactive } from "vue"
import { useRoute } from 'vue-router';

const movieStore = useMovieStore()
const indexStore = useIndexStore()
const route = useRoute();

const countOfRecs = reactive([1, 2, 3, 4])
const movie = computed(() => movieStore.movie)

onMounted(async () => {
  await movieStore.getMovieById(route.params.id)
});
</script>

<style></style>