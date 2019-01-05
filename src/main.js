import Vue from 'vue'
import App from './App.vue'
import router from './router'


// fontawesome icon stuff
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faBars);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// end fontawesome icon stuff

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
