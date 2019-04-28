import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import gymList from '@/components/gymList';
import gymDetail from '@/components/gymDetail';
import Plan from '@/components/Plan';
import Target from '@/components/Target';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Me from '@/components/Me';
import Info from '@/components/Info';
import Comments from '@/components/Comments';
import Message from '@/components/Message';
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home',
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/gymList',
    name: 'gymList',
    component: gymList
  }, {
    path: '/gymDetail',
    name: 'gymDetail',
    component: gymDetail
  }, {
    path: '/plan',
    name: 'Plan',
    component: Plan
  }, {
    path: '/target',
    name: 'Target',
    component: Target
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/me',
    name: 'Me',
    component: Me,
    children: [{
      path: '/info',
      name: 'Info',
      component: Info
    }, {
      path: '/message',
      name: 'Message',
      component: Message
    }, {
      path: '/comments',
      name: 'Comments',
      component: Comments
    }]
  }]
})
