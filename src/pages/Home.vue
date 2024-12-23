<template>
  <main class="main">
    <Upcoming/>
    <Movie/>
    <Tvs/>
    <TopRate/>
  </main>
</template>

<script setup>
import {ref, reactive, computed, onMounted} from 'vue'
import Upcoming from '@/components/Upcoming/Upcoming.vue'
import Movie from '@/components/Movie/Movie.vue'
import Tvs from '@/components/TVs/Tvs.vue'
import TopRate from '@/components/Top10/TopRate.vue'
</script>

<style>

</style>