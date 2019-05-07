<template>
  <div>
    <Form ref="formInline" :model="formInline" inline>
      <FormItem label="Input">
        <Input v-model="formInline.name" placeholder="name"></Input>
      </FormItem>
      <FormItem label="Input">
        <Input v-model="formInline.age" placeholder="age"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit">Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { userById, update } from "@/api/user.js";
export default {
  //  获取id 然后通过参数获取信息 接着进行update 更改

  data() {
    return {
      formInline: {
        name: "",
        age: ""
      }
    };
  },
  mounted() {
    const id = this.$route.query.id;
    if(id!= undefined) {
       userById(id)
      .then(res => {
        this.formInline.name = res.name;
        this.formInline.age = res.age;
      })
      .catch(err => {
        console.log(err);
      });
    } 
   
  },
  methods: {
    handleSubmit() {
      // 保存 post 上传保存
      const user = {
          name: this.formInline.name,
          age: this.formInline.age,
          id: this.$route.query.id
      }
      update(user).then(res => {
          if(res.success) {
              this.$router.back();
          }
      }).catch( err => {console.log(err)
            alert("失败")
      })
    }
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>
