// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import {
	router
} from './router'
import axios from './axios/http.js'
// Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.use(iView);
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
