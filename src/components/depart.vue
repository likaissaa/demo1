<template>
 <div>
     <!-- 表格展示用户添加删除功能 -->
     <router-link to="/departadd"><Button type="primary">添加部门</Button></router-link>
    <Table :columns="departcolumn" :data="deplist">
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="update(index)">修改</Button>
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
 </div>
</template>

<script>
 import { depList, remove } from "@/api/dep.js";
 export default {
  
   data () {
     return {
        deplist: [],
      departcolumn: [
        {
          title: "部门名称",
          key: "dep_name"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ]
     }
     
   },
    mounted() {
        // 完成对基本信息的增删改等操作
        // 初始化的user 后端的列表使用iview 标哥显示
        // 然后对表哥进行 查询 然后通过名称 或者通过id 查找详细信息等
          depList()
          .then(res => {
            this.deplist = res
          })
          .catch(err => {
            console.log(err);
          });
      },
   components: {

   }
 }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

 
</style>
