import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueMapbox from "@studiometa/vue-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import store from "./store";

Vue.use(VueMapbox);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
