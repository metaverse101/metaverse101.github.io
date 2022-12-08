import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { createRouter, createWebHistory } from 'vue-router'
import {
    metaverse101Article,
    metaverseAbout,
    metaverseHome,
    metaverseMeetTheExperts
} from './pages/pages-export.js'
import {
    metaverseEntertainment,
    metaverseHealthCase,
    metaverseInterpersonalRelationships
} from './pages/case-studies/case-studies-export.js'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/metaverse/', component: metaverseHome },
    { path: '/metaverse/about/', component: metaverseAbout },
    { path: '/metaverse/101/', component: metaverse101Article },
    { path: '/metaverse/interpersonal-relationships/', component: metaverseInterpersonalRelationships },
    { path: '/metaverse/health-case/', component: metaverseHealthCase },
    { path: '/metaverse/entertainment/', component: metaverseEntertainment },
    { path: '/metaverse/meet-the-experts/', component: metaverseMeetTheExperts },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

loadFonts()

app.use(AOS.init())
app.use(vuetify)
app.use(router)
app.mount('#app')
