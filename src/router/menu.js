import { h } from "vue";
import { HomeOutline, CartOutline, LogInOutline } from "@vicons/ionicons5";

export const leftMenu = [
  {
    label: "Home",
    key: "/",
    to: "/",
    icon: () => h(HomeOutline),
  },
  {
    label: "Shop",
    key: "/shop",
    to: "/shop",
    icon: () => h(CartOutline),
  },
];

export const rightMenu = [
  {
    label: "Login",
    key: "/login",
    to: "/login",
    icon: () => h(LogInOutline),
  },
];
