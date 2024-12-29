<template>
  <router-link :to="page + item.id" class="main__content-item">
    <img v-lazy="indexStore.imageFullUrl + item.backdrop_path" alt="" class="main__content-item-img">
    <h2 class="main__content-item-name">{{ item.title || item.name }}</h2>
  </router-link>
</template>

<script setup>
import { useIndexStore } from '@/store/indexStore.js'

const props = defineProps({
    item: Object,
    content: String
})

const page = props.content == 'movie' ? '/movie/' : '/tv/'

const indexStore = useIndexStore()
</script>

<style>

</style>