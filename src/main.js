import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import HelloWorld from './components/HelloWorld';
import Aids from './components/Aids';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/aids', component: Aids },
    ]
})

const app = createApp(App)

app.use(router);

app.mount('#app');
