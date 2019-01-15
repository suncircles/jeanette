import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll);

import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';


// fontawesome icon stuff
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faBars);
library.add(faFacebook);
library.add(faTwitter);
library.add(faGraduationCap);
library.add(faHome);
library.add(faHandHoldingUsd);
library.add(faCity);
library.add(faBalanceScale);
library.add(faGlobeAmericas);
library.add(faUsers);
// library.add(faBars);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// end fontawesome icon stuff

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
