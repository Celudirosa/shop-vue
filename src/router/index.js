import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/shop",
    name: "Shop",
    component: ShopView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
