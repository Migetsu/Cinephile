<template>
    <section class="main__media" v-if="popularMovieStore.popularMovies">
        <router-link to="/movie" class="main__media-title">
            <span>Фильмы</span>
            <fa icon="chevron-right" class="main__media-arrow" />
        </router-link>
        <Swiper :modules="modules" :space-between="25" navigation :breakpoints="swiperOptions.breakpoints">
            <SwiperSlide class="main__media-item" v-for="(movie, idx) in popularMovieStore.popularMovies"
                :key="movie.id" @click="getMovie(movie, idx)">
                <img v-lazy="indexStore.imageFullUrl + movie.poster_path" alt="" class="main__media-item-img">
            </SwiperSlide>
            <SwiperSlide>
                <router-link to="/movie/" class="main__media-item">Все фильмы</router-link>
            </SwiperSlide>
        </Swiper>
        <InfoBlockMovie page="/movie/" />
        <!-- <InfoBlock page="/movie/" /> -->
    </section>
    <div class="loading" v-else>
        <div class="loading__spiner"></div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { usePopularMovieStore } from '@/store/modules/popularMovieStore.js'
import { useMovie } from '@/store/modules/movieStore.js'
import { useIndexStore } from '@/store/indexStore.js'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import InfoBlockMovie from '@/components/InfoBlock/InfoBlockMovie.vue'

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
let popularMovieStore = usePopularMovieStore()
let indexStore = useIndexStore()
let movieStore = useMovie()

const getMovie = async (movie, idx) => {
    movieStore.selectedId = movie.id
    movieStore.index = idx
    await movieStore.getMovieById(movieStore.selectedId)
    movieStore.selectedMovie = movieStore.movie
}

onMounted(() => {
    popularMovieStore.getPopularMovie()
})
</script>

<style></style>