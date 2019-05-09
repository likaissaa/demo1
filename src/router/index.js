import Vue from 'vue'
import Router from 'vue-router'
import Less from '@/components/less.vue'
import Work from '@/components/work.vue'
import store from '../store/index';
import User from '@/components/User'
import Useradd from '@/components/useradd'
import Depart from '@/components/depart'
import Index from '@/components/index'
import Departadd from '@/components/departadd'
Vue.use(Router)
 // 今后使用异步加载路由的方式开发
export const router = new Router({
	mode: 'history',
	routes: [
    {
    path:'/',
    component:Index,
	  },
    {
      path:'/less',
      component:Less
		},
		{
			path: '/work',
			component: Work
		},
		{
			path: '/user',
			component: User
		},
		{
			path: '/info',
			component: Useradd
		},
		{
			path: '/depart',
			component: Depart
		},
		{
			path: '/departadd',
			component: Departadd
		}
 ]
})

if (sessionStorage.getItem('user')) {
	console.log("刷新当前页面")
	console.log(sessionStorage.getItem('user'))
    store.dispatch("login", sessionStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
  console.log("jinalile")
	var auth = to.meta.auth
	var path = to.path
	var isLogin = Boolean(store.state.user.token) /*非空na么就是登录了*/
	console.log("路由的token="+store.state.user.token)
	if(auth){
		if(auth && !isLogin && path != '/home/login') {
			console.log("**********")
			next({path:'/home/login',
				query:{
					redirect:to.fullPath
				}
			})
	} else {
			next()
		}
	}
	else{
		console.log(to.fullPath)
		next()
		/*next({
			query:{
					redirect:to.fullPath
				}
		}
		)*/
	}
})
