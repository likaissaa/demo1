<template>
  <div>
    <Upload
      multiple
      type="drag"
      action="/api/user/upload"
      :on-success="handleSuccess"
      :format="['jpg','jpeg', 'png']"
      :max-size="2048"
    >
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>Click or drag files here to upload</p>
      </div>
    </Upload>
    <img :src="myimg" alt="暂无"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myimg: ''
    };
  },
  components: {},
  methods: {
    handleSuccess(res, file) {
      this.myimg = res.url
    }
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>
