import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import GlobalEvents from 'vue-global-events'
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.component('GlobalEvents', GlobalEvents);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
