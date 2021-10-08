import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import authorizationForm from '../views/AuthorizationForm.vue';
import registrationForm from '../views/RegistrationForm.vue';
import pageNotFound from '../views/PageNotFound.vue';
import userAccount from '../views/UserAccount.vue';
import actualNews from '../views/ActualNews.vue';
import cryptocurrencyRate from '../views/CryptocurrencyRate.vue';
import store from '../store';

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
    // beforeEnter: AuthGuard, // вызываем функцию проверки авторизации, на хуке before
  },
  {
    path: '/actual-news',
    name: 'actualNews',
    component: actualNews,
    // beforeEnter: AuthGuard, // вызываем функцию проверки авторизации, на хуке before
  },
  {
    path: '/сryptocurrency-rate',
    name: 'cryptocurrencyRate',
    component: cryptocurrencyRate,
    // beforeEnter: AuthGuard, // вызываем функцию проверки авторизации, на хуке before
  },
  {
    path: '/*', // При неизвестных путях, перенаправляем на страницу 404
    name: 'pageNotFound',
    component: pageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Функция которая проверяет авторизован ли пользователь, если нет, перекидывает его на страницу авторизации.
// function AuthGuard(from, to, next) {
//   if (store.getters.isUserAuthenticated) {
//     next();
//   } else {
//     next('/authorization');
//   }
// }

export default router;
