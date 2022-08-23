import CarListPage from "../views/CarListPage.vue"
import CarDetailPage from "../views/CarDetailPage.vue"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "CarList",
    component: CarListPage,
  },
  {
    path: "/car/:id",
    name: "CarDetail",
    component: CarDetailPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
