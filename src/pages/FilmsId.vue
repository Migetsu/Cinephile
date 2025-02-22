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
            <a :href="trailer && trailer.results.length ? `https://www.youtube.com/watch?v=${trailer.results[0].key}` : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'"
              v-if="trailer" class="main__contentId-media-trailer" target="_blank">
              <fa icon="play" class="main__contentId-media-icon" />
              <span class="main__contentId-media-span">Смотреть Трейлер</span>
            </a>
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
      <div class="main__budgetBlock-item">
        <h4 class="budgetBlock-title">Бюджет</h4>
        <p class="budgetBlock-descr">{{ `$${movie.budget.toLocaleString('de-DE')}` }}</p>
      </div>
      <div class="main__budgetBlock-item">
        <h4 class="budgetBlock-title">Сборы</h4>
        <p class="budgetBlock-descr">{{ `$${movie.revenue.toLocaleString('de-DE')}` }}</p>
      </div>
      <div class="main__budgetBlock-item">
        <h4 class="budgetBlock-title">Статус</h4>
        <p class="budgetBlock-descr">{{ movie.status }}</p>
      </div>
      <div class="main__budgetBlock-item">
        <h4 class="budgetBlock-title">Исходное название</h4>
        <p class="budgetBlock-descr">{{ movie.original_title }}</p>
      </div>
    </div>
    <div class="main__recomendations container">
      <h3 class="main__recomendations-title">Рекомендации</h3>
      <div class="main__recomendations-list">
        <router-link :to="page + rec.id" class="main__recomendations-item" v-for="(rec, idx) in recoms" :key="idx" @click="refreshPage(rec.id)">
          <img v-lazy="indexStore.imageFullUrl + rec.backdrop_path" alt="" class="main__recomendations-item-img">
          <h2 class="main__recomendations-item-name">{{ rec.title }}</h2>
        </router-link>
        <!-- <Swiper :modules="modules" :space-between="25" navigation :breakpoints="swiperOptions.breakpoints">
          <SwiperSlide :to="page + rec.id" class="main__recomendations-item" v-for="(rec, idx) in recoms" :key="idx" @click="refreshPage(rec.id)">
          <img v-lazy="indexStore.imageFullUrl + rec.backdrop_path" alt="" class="main__recomendations-item-img">
          <h2 class="main__recomendations-item-name">{{ rec.title }}</h2>
        </SwiperSlide>
        </Swiper> -->
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
import { useMovieRecsStore } from "@/store/modules/movieRecsStore.js"
import { useMovieTrailerStore } from "@/store/modules/movieTrailerStore.js"
import { onMounted, computed, reactive, ref } from "vue"
import { useRoute, useRouter } from 'vue-router';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperOptions = reactive({
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
    1450: {
      slidesPerView: 5.5
    }
  }
})

const modules = reactive([Navigation])
const movieStore = useMovieStore()
const indexStore = useIndexStore()
const movieRecsStore = useMovieRecsStore()
const movieTrailerStore = useMovieTrailerStore()
const route = useRoute();
const router = useRouter();
const countOfRecoms = ref(4)
const page = '/movie/'

const countOfRecs = reactive([1, 2, 3, 4])
const movie = computed(() => movieStore.movie)
var trailer = computed(() => movieTrailerStore.trailer)
var recoms = ref(null)

onMounted(async () => {
  await fetchMovieData(route.params.id)
});

const fetchMovieData = async (movieId) => {
  await movieStore.getMovieById(movieId)
  await movieTrailerStore.getTrailer(movieStore.movie.id)
  await movieRecsStore.getRecs(movieStore.movie.id)
  recoms.value = getCountRecs.value
}

const getCountRecs = computed(() => {
  return movieRecsStore.getMovieRecs(countOfRecoms.value)
})

const refreshPage = async (movieId) => {
  await fetchMovieData(movieId)
  router.push(`${page}${movieId}`)
  window.scrollTo(0, 0);
}
</script>

<style></style>