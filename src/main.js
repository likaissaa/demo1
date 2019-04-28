// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueMagnify from 'vue-magnify'
import store from './store/index';
import 'iview/dist/styles/iview.css';
import {
	router
} from './router'
import axios from './axios/http.js'
// 实际打包时应该不引入mock
if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.use(vueMagnify)
// Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	axios,
	template: '<App/>',
	components: {
		App
	}
})
