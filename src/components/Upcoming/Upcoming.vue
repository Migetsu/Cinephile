<template>
  <Transition name="upcoming" mode="out-in">
    <section class="main__upcoming" v-if="upcomings">
      <UpcomingItem 
      v-for="(movie, idx) in upcomings" 
      :key="movie.id"
      :movie="movie"
      :idx="idx"
      :slideView="slideView"
      :next="upcomings[idx + 1 == upcomings.length ? 0 : idx + 1]" 
      @slideNext="slideNext" />
    </section>
    <div class="loading" v-else>
      <div class="loading__spiner"></div>
    </div>
  </Transition>
</template>

<script setup>
import UpcomingItem from "@/components/Upcoming/UpcomingItem.vue";
import { useUpcomingStore } from '@/store/modules/upcomingStore.js'
import { ref, onMounted } from 'vue'

const upcomings = ref(null)
const slideView = ref(0)
const timeout = ref(null)

const slide = () => {
  if (upcomings.value.length - 1 == slideView.value) {
    slideView.value = 0
  } else {
    slideView.value++
  }
  timeout.value = setTimeout(slide, 10000);
}

const slideNext = () => {
  clearTimeout(timeout.value)
  slide()
}

let upcomingStore = useUpcomingStore()
onMounted(async () => {
  await upcomingStore.getUpcoming()
  upcomings.value = upcomingStore.upcoming
  timeout.value = setTimeout(slide, 10000);
})
</script>

<style></style>