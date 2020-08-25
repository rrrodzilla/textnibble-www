import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/styles/index.css";
import VueGtm from 'vue-gtm';

Vue.config.productionTip = false;
Vue.use(VueGtm, {
    id: 'GTM-THK65DJ', // Your GTM single container ID or array of container ids ['GTM-xxxxxxx', 'GTM-yyyyyyy']
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    vueRouter: router, // Pass the router instance to automatically sync with router (optional),
    debug: true
});
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");