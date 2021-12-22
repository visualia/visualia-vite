import { createApp } from "vue";
import App from "./App.vue";
import { Visualia } from "visualia3";

const app = createApp(App);
app.use(Visualia);
app.mount("#app");
