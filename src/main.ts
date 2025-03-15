import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./style.css"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
import "vue3-toastify/dist/index.css";


const app = createApp(App);
app.use(createPinia().use(piniaPluginPersistedstate));
app.use(router);
app.mount("#app");
