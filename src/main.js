import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { createRouter, createWebHashHistory } from 'vue-router'
import {
    metaverse101Article,
    metaverseAbout,
    metaverseHome,
    metaverseMeetTheExperts
} from "./pages/pages-export.js";
import {
    metaverseEntertainment,
    metaverseHealthCase,
    metaverseInterpersonalRelationships
} from "./pages/case-studies/case-studies-export.js";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: metaverseHome },
    { path: '/about/', component: metaverseAbout },
    { path: '/101/', component: metaverse101Article },
    { path: '/interpersonal-relationships/', component: metaverseInterpersonalRelationships },
    { path: '/health-case/', component: metaverseHealthCase },
    { path: '/entertainment/', component: metaverseEntertainment },
    { path: '/meet-the-experts/', component: metaverseMeetTheExperts },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

loadFonts()

app.use(AOS.init())
app.use(vuetify)
app.use(router)
app.mount('#app')
