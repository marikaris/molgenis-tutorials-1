import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import router from '@/router'

// @ts-ignore
import Eagle from 'eagle.js'
import 'animate.css'

import tutorials from '@/slideshows/tutorials.ts'

/* eslint-disable no-new */

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style/molgenis_blue.css'

Vue.use(BootstrapVue)

Vue.use(Eagle)
Vue.use(Router)
Vue.config.productionTip = false

const routes = []

tutorials.list.forEach(function (tutorial: any) {
  routes.push({
    path: '/' + tutorial.infos.path,
    component: tutorial
  })
})

new Vue({
  el: '#app',
  router,
  render: h => h('App'),
  components: { App }
})
