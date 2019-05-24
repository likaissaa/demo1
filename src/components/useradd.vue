<template>
  <div>
    <Form ref="formInline" :model="formInline" inline>
      <FormItem label="账号">
        <Input v-model="formInline.name" placeholder="name"/>
      </FormItem>
      <FormItem label="密码">
        <Input v-model="formInline.age" placeholder="age"/>
      </FormItem>

      <FormItem>
        <Select v-model="formInline.dep" style="width:200px">
          <Option v-for="item in depList" :value="item.id" :key="item.id">{{ item.text }}</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Upload
        multiple
        type="drag"
        action="/api/user/upload" :on-success="handleSuccess" :on-error="handleError" :format="['jpg','jpeg', 'png']" :max-size="2048">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
        </Upload>
      </FormItem>
      <FormItem label="图片">
        <input v-model="formInline.userimg" type="hidden" placeholder="age"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit">Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { userById, update } from "@/api/user.js"
import {depList} from '@/api/dep.js'
import {success, error} from '@/common/utils.js'
export default {
  //  获取id 然后通过参数获取信息 接着进行update 更改

  data() {
    return {
      formInline: {
        name: "",
        age: "",
        dep: "",
        userimg: ""
      },
      depList: []
    };
  },
  mounted() {
    //链式调用
    var that = this
    depList().then(res => {
      // res 的循环 然后 map
        for(let i=0;i<res.length;i++) {
          let item = {
            "text": res[i].dep_name,
            "id": res[i].id
          }
          this.depList.push(item)
        }
        console.log(this.depList)
        const id = this.$route.query.id;
        if(id != undefined) {
          return userById(id)
        } 
    }).then(res => {
          if(res) {
          that.formInline.name = that.getdata(res.name);
          that.formInline.age = that.getdata(res.age);
          that.formInline.dep = that.getdata(res.depid);
          that.formInline.userimg = that.getdata(res.userimg)
          }
         
    }).catch(err => {
      console.log(err);
    })
    // const id = this.$route.query.id;
    // if (id != undefined) {
    //   userById(id)
    //     .then(res => {
    //       this.formInline.name = res.name;
    //       this.formInline.age = res.age;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  },
  methods: {
    getdata(data) {
      if(data== undefined) {
        return ""
      }else {
       return  data
      }
    },
    handleSubmit() {
      // 保存 post 上传保存
      const user = {
        depid: this.formInline.dep,
        name: this.formInline.name,
        age: this.formInline.age,
        id: this.$route.query.id,
        userimg: this.formInline.userimg
      };
      update(user)
        .then(res => {
          if (res.success) {
            this.$router.back();
          }
        })
        .catch(err => {
          console.log(err);
          alert("失败");
        });
    },
    handleSuccess(res, file,fileList) {
      if(res.success) {
        this.formInline.userimg = res.url;
       
         success(this, file.name+"上传成功")
      }else {
        error(this, "失败了")
      }
    },
    handleError(error, file, fileList){
      console.log(error);
      console.log(file)
    }
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>
