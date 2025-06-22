import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import naive from "naive-ui";
import i18n from "./i18n/login";
import router from "./router";

const app = createApp(App);

app.use(naive);
app.use(i18n);
app.use(router);

app.mount("#app");
