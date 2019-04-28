<template>
	<div>
		welcome
		<div class="red">
			{{user}}
		</div>
		<div class="red"> 当前数字{{count}}</div>
		<button type="button" @click="add">添加</button>
		<button type="button" @click="dec">减少</button>
		<div>
			<button type="button" @click="logout">退出</button>
		</div>
		<div>
			<button type="button" @click="toIview">跳转到iview测试界面</button>
		</div>
		<div>图标测试
			<i class="fa fa-female fa-lg"></i> fa-lg
		</div>
	</div>
</template>

<script type="text/javascript">
	import {
		mapGetters,mapMutations,mapActions
	} from 'vuex'
	export default {
		computed:{
			...mapGetters([
				'user',
				'count'
			])
		},
		methods: {
			toIview() {
				this.$router.push({
					path:'/iviewtest'
				})
			},
			logout() {
				this.loginout("hehe");
			    this.$router.back();
			},
			add() {
				this.increment(this.count).then((res)=> console.log(res));
			},
			dec() {
				this.decrement(this.count);
			},
			...mapMutations({
				loginout : 'LOGINOUT'
			}),
			...mapActions([
				'increment',
				'decrement'
			])

		}
	}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

  @import "~common/stylus/icon.styl"
	.red 
		color: red;
		font-size: 30px;
		border: 2px solid black;
</style>
