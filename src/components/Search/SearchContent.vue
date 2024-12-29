<template>
    <router-link to="#" class="main__content-item">
        <img v-lazy="indexStore.imageFullUrl + props.item.backdrop_path" alt="" class="main__content-item-img">
        <h2 class="main__content-item-name">{{ props.item.title || props.item.name }}</h2>
    </router-link>
</template>

<script setup>
import { useIndexStore } from '@/store/indexStore.js'

const indexStore = useIndexStore()

const props = defineProps({
    item: Object
})
</script>

<style></style>