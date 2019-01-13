import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Meet from './views/Meet.vue';
import Issues from './views/Issues.vue';
import GetInvolved from './views/GetInvolved.vue';
import Endorsements from './views/Endorsements.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/meet', name: 'meet', component: Meet},
    {path: '/issues', name: 'issues', component: Issues},
    {path: '/getinvolved', name: 'getinvolved', component: GetInvolved},
    {path: '/endorsements', name: 'endorsements', component: Endorsements}
  ]
});
