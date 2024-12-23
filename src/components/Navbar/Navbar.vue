<template>
  <header class="header">
    <nav class="header__nav" :class="{color: scrolled > 0}">
        <div class="container">
            <div class="header__nav-container">
                <router-link to="/" class="header__nav-logo" @click="burger = false">
                    <img src="@/assets/images/logo.svg" alt="">
                </router-link>
                <div class="header__nav-btn" @click="burger = !burger" :class="{active: burger}">
                    <span></span>
                </div>
                <ul class="header__nav-list" :class="{active: burger}">
                    <li v-for="link in links" :key="link.url" @click="burger = false">
                        <router-link :to="link.url" class="header__nav-link">
                            {{ link.title }}
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/search" class="header__nav-link" @click="burger = false">
                            <fa icon="search"/>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const links = reactive([
    {title: 'Главная', url: '/'},
    {title: 'Фильмы', url: '/movie'},
    {title: 'Сериалы', url: '/tv'},
])
const burger = ref(false)
const scrolled = ref(0)

const updateScroll = () => {
    scrolled.value = window.scrollY
}
onMounted(() => {
    window.addEventListener('scroll', updateScroll)
})
</script>

<style>

</style>