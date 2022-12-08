import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { createRouter, createWebHistory } from 'vue-router'
import metaverse101Article from "./pages/metaverse-101-article.vue";
import metaverseAbout from "./pages/metaverse-about.vue";
import metaverseHome from "./pages/metaverse-home.vue";
import metaverseMeetTheExperts from "./pages/metaverse-meet-the-experts.vue";
import metaverseEntertainment from "./pages/case-studies/metaverse-entertainment.vue";
import metaverseHealthCase from "./pages/case-studies/metaverse-health-case.vue";
import metaverseInterpersonalRelationships from "./pages/case-studies/metaverse-interpersonal-relationships.vue";

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
