<template>
    <div class="container">
        <div class="main__search">
            <input type="text" class="main__search-input" :placeholder="props.placeholder" v-model="value">
        </div>
        <div class="main__content-list" v-if="searchStore.searchData">
            <SearchContent v-for="item in searchStore.searchData" :key="item.id" :item="item" />
        </div>
    </div>
</template>

<script setup>
import SearchContent from "@/components/Search/SearchContent.vue";
import { ref, watch, onUnmounted } from 'vue'
import { useSearchStore } from '@/store/modules/searchStore.js'
import { debounce } from 'lodash'

const searchStore = useSearchStore()

const props = defineProps({
    placeholder: String
})

const value = ref('')

const search = debounce((searchTerm) => {
    searchStore.getSearchData(searchTerm)
}, 300)

watch(value, (newVal) => {
    search(newVal)
})

onUnmounted(() => {
    searchStore.resetSearch()
})
</script>

<style></style>