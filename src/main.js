import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import imageViewer from "image-viewer-vue";
Vue.use(imageViewer);
Vue.config.productionTip = true;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
