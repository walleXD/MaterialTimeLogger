import Vue from 'vue'
import Router from 'vue-router'

import { DefaultLayout } from '../layouts'
import { HomePage, NotFoundPage } from '../pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'HomePage',
          component: HomePage
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: NotFoundPage
    }
  ]
})
