<template>
  <div>
    <!-- 表格展示用户添加删除功能 -->
     <router-link to="/info"><Button type="primary">添加数据</Button></router-link>
    <Table :columns="usercolumn" :data="userlist">
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="update(index)">修改</Button>
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
  </div>
</template>

<script type="text/javascript">
import { mapGetters, mapMutations, mapActions } from "vuex";
import { userList, remove } from "@/api/user.js";
export default {
  data() {
    return {
      userlist: [],
      usercolumn: [
        {
          title: "名称",
          key: "name"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ]
    };
  },
  mounted() {
    // 完成对基本信息的增删改等操作
    // 初始化的user 后端的列表使用iview 标哥显示
    // 然后对表哥进行 查询 然后通过名称 或者通过id 查找详细信息等
    userList()
      .then(res => {
        this.userlist = res
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    update(index) {
     this.$router.push({path: '/info', query: {id: this.userlist[index].id}})
    },
    remove(index) {
      remove({id:this.userlist[index].id}).then(res => {
        if(res.success) {
          return userList()
        }
      }).then(res => {
          this.userlist = res
      }).catch(err => {
        console.log(err)
      })  
    }
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/icon.styl';

.red {
  color: red;
  font-size: 30px;
  border: 2px solid black;
}
</style>
