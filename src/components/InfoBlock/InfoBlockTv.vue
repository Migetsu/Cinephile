<template>
  <div class="main__info" :class="{ active: tvStore.selectedId != null}">
    <fa icon="xmark" class="main__info-close" @click="tvStore.selectedId = tvStore.selectedTv = null"/>
    <Transition name="mainInfo">
    <div class="main__info-block" v-if="tvStore.selectedTv">
      <img :src="indexStore.imageFullUrl + tvStore.selectedTv.backdrop_path" alt="" class="main__info-img">
      <div class="main__info-content">
        <div class="main__info-content-block">
          <h2 class="main__info-title">{{ tvStore.selectedTv.name }}</h2>
          <p class="main__info-text">{{ tvStore.selectedTv.overview }}</p>
          <p class="main__info-date">
            <span>
              {{ new Date(tvStore.selectedTv.first_air_date).getFullYear() }},
            </span>
            <span v-for="(genres, idx) in tvStore.selectedTv.genres" :key="genres.id">{{ genres.name }}
              <span v-if="idx < tvStore.selectedTv.genres.length - 1">,</span>
            </span>
            <span class="marglf">{{ tvStore.selectedTv.number_of_episodes }} серий</span>
          </p>
            <Actor :type="page" :id="tvStore.selectedTv.id" :count="4"/>
          <BtnMore :page="page" :id="tvStore.selectedTv.id"/>
        </div>
      </div>
    </div>
    </Transition>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useTvStore } from '@/store/modules/tvStore.js'
import { useIndexStore } from '@/store/indexStore.js'
let tvStore = useTvStore()
let indexStore = useIndexStore()

const props = defineProps({
  page: {
    type: String,
    default: '/tv/'
  }
})

</script>

<style></style>