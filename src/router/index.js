import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import authorizationForm from '../views/authorization-form.vue';
import registrationForm from '../views/registration-form.vue';
import pageNotFound from '../views/page-not-found.vue';
import userAccount from '../views/user-account.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/authorization',
    name: 'authorizationForm',
    component: authorizationForm,
  },
  {
    path: '/registration-form',
    name: 'registrationForm',
    component: registrationForm,
  },
  {
    path: '/user-account',
    name: 'userAccount',
    component: userAccount,
  },
  {
    path: '/*',
    name: 'pageNotFound',
    component: pageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
