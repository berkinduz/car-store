import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

import CarListPage from "./views/CarListPage.vue"
import CarDetailPage from "./views/CarDetailPage.vue"

import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "CarList", component: CarListPage },
    { path: "/car/:id", name: "CarDetail", component: CarDetailPage },
  ],
})

createApp(App).use(router).mount("#app")
