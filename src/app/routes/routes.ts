import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { HomePage } from '../../pages'
import AppLayout from '../layouts/AppLayout.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'app-layout',
    component: AppLayout,
    children: [
      { path: '', name: 'home', component: HomePage },
    ]
  }
]

export const router = createRouter({
  routes,
  history: createWebHistory()
})
