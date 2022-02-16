import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Top from './components/Top';
import Aids from './components/Aids';
// import axios from 'axios';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Top },
        { path: '/aids', component: Aids },
    ]
})

const app = createApp(App)

app.use(router);
// app.use(axios);

app.mount('#app');
