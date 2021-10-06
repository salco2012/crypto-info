import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import authorizationForm from '../views/authorization-form.vue';
import registrationForm from '../views/registration-form.vue';

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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
