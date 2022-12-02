import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);

loadFonts()

app.use(AOS.init())
app.use(vuetify)
app.mount('#app')
