import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Data from '@/views/Data.vue'
import Api from '@/views/Api.vue'
import ProvBack from '@/views/prov-back'
import provParty from '@/views/prov-party'
import provParty1 from '@/views/prov-party1'
import provParty2 from '@/views/prov-party2'
import sourceDetail from '@/views/source-detail.vue'
import applySource from '@/views/apply-source.vue'
import applyApi from '@/views/apply-api.vue'
import applySubmit from '@/views/apply-submit.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '/data', component: Data },
  { path: '/api', component: Api },
  { path: '/provback', component: ProvBack },
  { path: '/provparty', component: provParty },
  { path: '/provparty1', component: provParty1 },
  { path: '/provparty2', component: provParty2 },
  { path: '/sourceDetail', component: sourceDetail },
  { path: '/applysource', component: applySource },
  { path: '/applyapi', component: applyApi },
  { path: '/applysubmit', component: applySubmit }
]

const router = new VueRouter({
  routes
})

export default router
