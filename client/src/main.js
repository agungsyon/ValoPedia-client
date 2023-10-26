import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(vue3GoogleLogin, {
  clientId: '192042912020-b27h74lk8tlat1q68r7rtj8igs049ca7.apps.googleusercontent.com'
})

app.use(pinia);
app.use(router);

app.mount("#app");
