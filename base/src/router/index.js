import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/page/index';

Vue.use(Router);

export default new Router({
  mode: 'history', // history hash
  routes: [
    {path: '/', name: 'index', component: Index}
  ]
});