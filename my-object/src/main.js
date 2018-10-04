// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(vuex)
/* eslint-disable no-new */
const store=new vuex.Store({

})
new Vue({
  el: '#dpp',
  router,
  components: { App },
  template: '<App/>'
})
