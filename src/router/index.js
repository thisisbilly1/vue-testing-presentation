import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/simple',
    name: 'simple',
    component: () => import(/* webpackChunkName: "simple" */ '../views/SimpleExample.vue')
  },
  {
    path: '/propsEvents',
    name: 'propsEvents',
    component: () => import(/* webpackChunkName: "props" */ '../views/PropsAndEvents.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import(/* webpackChunkName: "props" */ '../views/StoreExample.vue')
  },
  {
    path: '/mixin',
    name: 'mixin',
    component: () => import(/* webpackChunkName: "props" */ '../views/MixinExample.vue')
  },
  {
    path: '/api',
    name: 'api',
    component: () => import(/* webpackChunkName: "props" */ '../views/APIExample.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
