<template>
  <div>
    <div>
      <Form ref="formInline" :model="formInline" inline>
        <FormItem label="Input">
          <Input v-model="formInline.depname" placeholder="name"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit">Signin</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { depById, update } from "@/api/dep.js";
export default {
  data() {
    return {
      formInline: {
        depname: ""
      }
    };
  },
  mounted() {
    const id = this.$route.query.id;
    if(id!= undefined) {
       depById(id)
      .then(res => {
        this.formInline.depname = res.dep_name;
      })
      .catch(err => {
        console.log(err);
      });
    } 
  },
  components: {},
  methods: {
    handleSubmit() {
      // 保存 post 上传保存
      const dep = {
        dep_name: this.formInline.depname,
        id: this.$route.query.id
      };
      update(dep)
        .then(res => {
          if (res.success) {
            this.$router.back();
          }
        })
        .catch(err => {
          console.log(err);
          alert("失败");
        });
    }
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>
