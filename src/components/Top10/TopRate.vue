<template>
  <section class="main__rate" v-if="topRateStore.topRate">
    <h2 class="main__rate-title">ТОП <span>10</span></h2>
    <Swiper 
        :modules="modules"
        :space-between="25" 
        navigation
        :breakpoints="swiperOptions.breakpoints"
        >
            <SwiperSlide 
            class="main__rate-item" 
            v-for="(item, idx) in topRateStore.topRate"
            :key="item.id"
            >
            <div class="main__rate-info">
                <p>{{ idx + 1 }}</p>
            </div>
            <img :src="indexStore.imageFullUrl + item.poster_path" alt="" class="main__rate-img">
            </SwiperSlide>
        </Swiper>
  </section>
      <div class="loading" v-else>
      <div class="loading__spiner"></div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useTopRateStore } from '@/store/modules/topRateStore.js'
import { useIndexStore } from '@/store/indexStore.js'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

let topRateStore = useTopRateStore()
let indexStore = useIndexStore()

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
            slidesPerView: 3.3
        }
    }
})
const modules = reactive([Navigation])

onMounted(() => {
    topRateStore.getTop()
})
</script>

<style>

</style>