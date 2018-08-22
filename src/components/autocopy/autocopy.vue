<template>
      <el-container>
        <el-aside>
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b" router :default-active="$route.path">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>代码控制</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/autocopy/first/auto">代码自动化</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="/autocopy/first/api">接口管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>

</template>

<script>
    export default {
        data(){
          return{

          }
        },
        methods:{
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped lang="less">
  .el-container{
    height:800px;
    .el-aside{
      .el-menu-vertical-demo{
        width:100%;
        height:800px;
      }
    }

  }
</style>
