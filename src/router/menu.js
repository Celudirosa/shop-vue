import { h } from "vue";
import { HomeOutline, CartOutline, LogInOutline } from "@vicons/ionicons5";

const menuOptions = [
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
  {
    label: "Login",
    key: "/login",
    to: "/login",
    icon: () => h(LogInOutline),
  },
];

export default menuOptions;
