import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import authorizationForm from '../views/AuthorizationForm.vue';
import registrationForm from '../views/RegistrationForm.vue';
import pageNotFound from '../views/PageNotFound.vue';
import actualNews from '../views/ActualNews.vue';
import cryptocurrencyRate from '../views/CryptocurrencyRate.vue';
import miningData from '../views/MiningData.vue';
import informationExchanges from '../views/InformationExchanges.vue';

import store from '../store/index';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
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
      path: '/actual-news',
      name: 'actualNews',
      component: actualNews,
      beforeEnter: AuthGuard,
    },
    {
      path: '/information-exchanges',
      name: 'informationExchanges',
      component: informationExchanges,
      beforeEnter: AuthGuard,
    },
    {
      path: '/mining',
      name: 'miningData',
      component: miningData,
      beforeEnter: AuthGuard,
    },
    {
      path: '/cryptocurrency-rate',
      name: 'cryptocurrencyRate',
      component: cryptocurrencyRate,
      beforeEnter: AuthGuard,
    },
    {
      path: '/*', // При неизвестных путях, перенаправляем на страницу 404
      name: 'pageNotFound',
      component: pageNotFound,
    },
  ],
});

// // Функция которая проверяет авторизован ли пользователь, если нет, перекидывает его на страницу авторизации.
function AuthGuard(from, to, next) {
  if (store.getters.isUserAuthenticated) {
    next();
  } else {
    next('/authorization');
  }
}
