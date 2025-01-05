<template>
  <main class="main">
    <Upcoming/>
    <Movie/>
    <Tvs/>
    <TopRate/>
  </main>
</template>

<script setup>
import {ref, reactive, computed, onMounted, onUnmounted} from 'vue'
import Upcoming from '@/components/Upcoming/Upcoming.vue'
import Movie from '@/components/Movie/Movie.vue'
import Tvs from '@/components/TVs/Tvs.vue'
import TopRate from '@/components/Top10/TopRate.vue'

onUnmounted(() => {
  window.scrollTo(0, 0);
})
</script>

<style>

</style>