import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'

import { DefaultLayout } from '../layouts'
import { HomePage, NotFoundPage } from '../pages'

Vue.use(Router)
Vue.use(VueMeta)

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
