<template>
    <section class="main__media" v-if="popularTvsStore.popularTvs">
        <router-link to="/tv" class="main__media-title">
            <span>Сериалы</span>
            <fa icon="chevron-right" class="main__media-arrow" />
        </router-link>
        <Swiper :modules="modules" :space-between="25" navigation :breakpoints="swiperOptions.breakpoints">
            <SwiperSlide class="main__media-item" v-for="(tv, idx) in popularTvsStore.popularTvs" :key="tv.id"
                @click="getTv(tv, idx)">
                <img v-lazy="indexStore.imageFullUrl + tv.poster_path" alt="" class="main__media-item-img">
            </SwiperSlide>
            <SwiperSlide>
                <router-link to="/tv/" class="main__media-item">Все сериалы</router-link>
            </SwiperSlide>
        </Swiper>
        <InfoBlockTv page="/tv/"/>
    </section>
    <div class="loading" v-else>
        <div class="loading__spiner"></div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { usePopularTvsStore } from '@/store/modules/popularTvsStore.js'
import { useTvStore } from '@/store/modules/tvStore.js'
import { useIndexStore } from '@/store/indexStore.js'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import InfoBlockTv from '@/components/InfoBlock/InfoBlockTv.vue'

const swiperOptions = reactive({
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
        1450: {
            slidesPerView: 5.5
        }
    }
})
const modules = reactive([Navigation])
let popularTvsStore = usePopularTvsStore()
let indexStore = useIndexStore()
let tvStore = useTvStore()

const getTv = async (tv, idx) => {
    tvStore.selectedId = tv.id
    tvStore.index = idx
    await tvStore.getTvById(tvStore.selectedId)
    tvStore.selectedTv = tvStore.tv
}

onMounted(() => {
    popularTvsStore.getPopularTvs()
})
</script>

<style></style>