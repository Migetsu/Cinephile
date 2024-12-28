<template>
    <div class="container">
        <div class="main__content">
            <h2 class="main__content-title">{{ props.content == 'movie' ? 'Все фильмы' : 'Все сериалы' }}</h2>
            <div class="main__content-list">
                <ContentItem v-for="item in allMovies" :key="item.id" :item="item" :content="props.content" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ContentItem from '@/components/Content/ContentItem.vue';
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { usePopularMovieStore } from '@/store/modules/popularMovieStore.js'
import { usePopularTvsStore } from '@/store/modules/popularTvsStore.js'

const popularMovieStore = usePopularMovieStore()
const popularTvsStore = usePopularTvsStore()
const props = defineProps({
    content: String
})

const page = ref(1)
const loading = ref(false)
const allMovies = ref([])

const getContent = async () => {
    if (!loading.value) {
        loading.value = true
        if (props.content === 'movie') {
            await popularMovieStore.getPopularMovie(page.value)
            allMovies.value = [...allMovies.value, ...popularMovieStore.popularMovies]
        } else {
            await popularTvsStore.getPopularTvs(page.value)
            allMovies.value = [...allMovies.value, ...popularTvsStore.popularTvs]
        }
        loading.value = false
        page.value++
    }
}

const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        getContent()
    }
}

onMounted(() => {
    getContent()
    window.addEventListener('scroll', handleScroll)
})

watch(() => props.content, () => {
    page.value = 1
    allMovies.value = []
    getContent()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style></style>