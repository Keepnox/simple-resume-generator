import { createApp } from "vue";
import App from "./App.vue";
import vuePugPlugin from "vue-pug-plugin";

import "./style.css";

const app = createApp(App);

app.mount("#app");
