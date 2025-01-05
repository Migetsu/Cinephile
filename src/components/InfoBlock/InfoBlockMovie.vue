<template>
  <div class="main__info" :class="{ active: movieStore.selectedId != null}">
    <fa icon="xmark" class="main__info-close" @click="movieStore.selectedId = movieStore.selectedMovie = null"/>
    <Transition name="mainInfo">
    <div class="main__info-block" v-if="movieStore.selectedMovie">
      <img :src="indexStore.imageFullUrl + movieStore.selectedMovie.backdrop_path" alt="" class="main__info-img">
      <div class="main__info-content">
        <div class="main__info-content-block">
          <h2 class="main__info-title">{{ movieStore.selectedMovie.title }}</h2>
          <p class="main__info-text">{{ movieStore.selectedMovie.overview }}</p>
          <p class="main__info-date">
            <span>
              {{ new Date(movieStore.selectedMovie.release_date).getFullYear() }}
            </span>
            <span v-for="genres in movieStore.selectedMovie.genres" :key="genres.id">{{ genres.name }}</span>
            <span class="marglf">{{ movieStore.runtime }}</span>
          </p>
            <Actor :type="page" :id="movieStore.selectedMovie.id" :count="4"/>
          <BtnMore :page="page" :id="movieStore.selectedMovie.id"/>
        </div>
      </div>
    </div>
    </Transition>
  </div>
</template>

<script setup>
import { reactive, ref, onUnmounted } from 'vue'
import { useMovieStore } from '@/store/modules/movieStore.js'
import { useIndexStore } from '@/store/indexStore.js'
let movieStore = useMovieStore()
let indexStore = useIndexStore()

const props = defineProps({
  page: {
    type: String,
    default: '/movie/'
  }
})

onUnmounted(() => {
  movieStore.selectedId = movieStore.selectedMovie = null
})
</script>

<style></style>