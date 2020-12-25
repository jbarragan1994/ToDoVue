import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ToggleButton from "vue-js-toggle-button";
import store from "./store/store";

require("./plugins/fontawesome");

Vue.config.productionTip = false;

Vue.use(ToggleButton);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
