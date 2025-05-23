import './assets/main.css'
import {createRouter , createWebHashHistory} from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Login from './assets/pages/Login.vue'
import Doctors from './assets/pages/Doctors.vue'
import Home from './assets/pages/Home.vue'
const routes = [
      {path: '/', component: Home},
      {path: '/login',component: Login},
      {path: '/doctors',component: Doctors}
];
const router = createRouter({
      history: createWebHashHistory(),
       routes
});
createApp(App).use(router).mount('#app')

