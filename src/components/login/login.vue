<template>
  <div>
    <input type="text" v-model="userName">
    <input type="text" v-model="password">
    <button type="button" @click="handleSubmit">提交</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import {Form ,FormItem,Icon} from 'iview'
	export default {
		data() {
				return {
         userName: '',
          password: ''
        }
    },
    components: {
      Form,
      Icon,
      FormItem
    },
		methods: {
      ...mapActions([
        'handleLogin'
      ]),
      handleSubmit () {
        this.handleLogin({"userName":this.userName,"password":this.password}).then(res => {
          if(res.success) {
            console.log(res)
            this.$router.push({
              path: '../loginsuccess'
            })
          }

        }).catch(err => {
          console.log(err)
        })
      }
    }
	}
</script>

<style type="text/css" scoped>

</style>
