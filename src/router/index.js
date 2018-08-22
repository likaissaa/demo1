import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import Autocopy from '@/components/autocopy/autocopy.vue'
import Control from '@/components/autocopy/control.vue'
import Login from '@/components/login.vue'
import Api from '@/components/autocopy/api'
import store from '../store/index';

Vue.use(Router)

export const router = new Router({
	mode: 'history',
	routes: [{
	  path:'',
    redirect:'/autocopy/first'
	},
    {
    path:'/autocopy/:id',
    component:Home,
    children:[
      {
        path:'',
        component:Autocopy,
        children:[
          {
            path:'auto',
            component:Control
          },
          {
            path:'api',
            component:Api
          }
        ]
      }
    ]
	  },
    {
      path:'/login',
      component:Login
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
