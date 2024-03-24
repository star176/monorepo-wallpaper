import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Setting from '../views/Setting.vue'
const routes = [
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'setting',
    path: '/setting',
    component: Setting
  }
]

const router = createRouter({
  history: createWebHistory(), //history表示使用HTML5的history模式
  routes // short for `routes: routes`
})

export default router
