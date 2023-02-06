import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { installComponents } from "@/setups/components-setup";

import "./assets/styles/base.scss";

const app = createApp(App);

app.use(createPinia()).use(router).mount("#app");

installComponents(app);
