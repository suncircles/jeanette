import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Meet from './views/Meet.vue';
import Issues from './views/Issues.vue';
import Volunteer from './views/Volunteer.vue';
import Endorsements from './views/Endorsements.vue';
import Leadership from './views/Leadership.vue';
import Donate from './views/Donate.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/meet', name: 'meet', component: Meet},
    {path: '/issues', name: 'issues', component: Issues},
    {path: '/volunteer', name: 'volunteer', component: Volunteer},
    {path: '/endorsements', name: 'endorsements', component: Endorsements},
    {path: '/leadership', name: 'leadership', component: Leadership},
    {path: '/donate', name: 'donate', component: Donate}
  ]
});
