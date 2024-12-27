<template>
    <div class="main__info-content-actors">
        <div class="main__info-content-actor" v-for="actor in actors" :key="actor.id">
            <img :src="indexStore.imageUrl + actor.profile_path" alt="" class="main__info-content-actor-img">
            <span class="main__info-content-actor-name">{{ actor.name }}</span>
        </div>
    </div>
</template>

<script setup>
import { useActorStore } from '@/store/modules/actorStore.js'
import { useIndexStore } from '@/store/indexStore.js'
import { ref, watch, computed } from 'vue'

const actorStore = useActorStore()
const indexStore = useIndexStore()
const props = defineProps({
    type: String,
    id: Number,
    count: Number
})

const actors = ref(null)

const getCountActors = computed(() => {
    const type = props.type === '/movie/' ? 'getMovieActorss' : 'getTvActorss'
    return actorStore[type](props.count)
})

watch(
    () => [props.id, props.type],
    async () => {
        await actorStore.getActors({ id: props.id, type: props.type })
        actors.value = getCountActors.value
    },
    { immediate: true }
)
</script>

<style lang="scss">
.main__info-content-actors {
    max-width: 450px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.main__info-content-actor {
    background: rgba(20, 20, 20, 0.5);
    border: 1px solid #ffffff;
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 15px;

    &-img {
        width: 45px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    &-name {
        color: #ffffff;
        font-size: 16px;
        line-height: 1,8;
        text-align: center;
    }
}
</style>