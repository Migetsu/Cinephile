<template>
    <div class="main__info-content">
        <div class="main__info-content-actor">
            <img src="" alt="" class="main__info-content-img">
            <span class="main__info-content-name"></span>
        </div>
    </div>
</template>

<script setup>
import { useActorStore } from '@/store/modules/actorStore.js'
import { ref, onMounted } from 'vue'

let actorStore = useActorStore()
const props = defineProps({
    type: String,
    id: Number,
    count: Number
})

var getCountActors = () => {
    const type = props.type == '/movie/' ? 'getMovieActorss' : 'getTvActorss'
    return actorStore.getters[`actor/${type}`](props.count)
}

onMounted(() => {
    actorStore.getActors({id: props.id, type: props.type})
})
</script>

<style></style>