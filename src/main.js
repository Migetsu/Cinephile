import { createApp } from 'vue'
import './style.scss'
import '@/assets/style/main.scss'
import App from './App.vue'
import { createPinia } from 'pinia';
import { routers } from "@/routers/routers";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import BtnMore from '@/components/UI/BtnMore.vue'
import Actor from '@/components/UI/Actor.vue'

const app = createApp(App)
const pinia = createPinia()

// Vue lazy-load
import VueLazyload from 'vue-lazyload'
const errorimage = ('src/assets/images/noimage.jpg')
app.use(VueLazyload)

library.add(fas, far, fab)
app.component('fa', FontAwesomeIcon)
app.component('BtnMore', BtnMore)
app.component('Actor', Actor)
app.use(routers)
app.use(pinia)
app.mount('#app')