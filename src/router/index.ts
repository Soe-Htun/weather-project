import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Weather from "../pages/WeatherPage.vue";
import ProfilePage from "../pages/ProfilePage.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/weather",
    component: Weather,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
