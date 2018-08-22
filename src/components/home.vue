<template>
	<div>
		<el-container>
			<!--设置一个header切换-->

			<el-header>
				<el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" background-color="#545c64"  text-color="#fff"
                 active-text-color="#ffd04b" @select="handleSelect" router>
          <el-menu-item index="/autocopy/first">自动化代码生成</el-menu-item>
				</el-menu>
			</el-header>
        <router-view></router-view>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
				return {

				};
		},
		methods: {
			handleSelect(key, keyPath) {
				/*console.log(key, keyPath);*/
			}
		}
	}
</script>

<style  lang="less">
	* {
		margin: 0;
		padding: 0;
	}
  .el-header{
    padding:0;
  }
</style>
