import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import MasonryWall from '@yeger/vue-masonry-wall'

createApp(App).use(Quasar, quasarUserOptions).use(MasonryWall).mount('#app')
