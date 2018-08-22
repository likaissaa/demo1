<template>
  <div class="control">
    <h2>代码自动化生成工具</h2>
    <search>

    </search>


<br/><br/>

    <el-input
      type="textarea"
      autosize
      placeholder="请输入内容"
      v-model="content"  :autosize="{ minRows: 2, maxRows: 6}"/>
    <el-button type="primary" @click="more">生成</el-button>循环次数{{allcontent.length}}
    <el-button type="default" @click="clear(1)">重置</el-button>

    <el-input
      type="textarea"
      autosize
      placeholder="请输入内容"
      v-model="content1"  :autosize="{ minRows: 2, maxRows: 6}"/>

  </div>
</template>

<script>

   import Search from "@/components/autocopy/search/search.vue";

   export default {
        name: "control",
        data(){
          return{
            content:'',
            content1:"",
            allcontent:[],
            searchinput:"",
            searchinputs:[],
            searchcontent:''
          }
        },
        components:{
          search:Search
        },
        methods:{
          more(){

              this.allcontent.push(this.content);
              this.content1="";
              for(var i =0;i <this.allcontent.length;i++){
                 this.content1+=this.allcontent[i]+"\r\n";
              }
          },
          clear(index){
            if(index==1) {
              this.content1 = "";
              this.content = ""
              this.allcontent = [];
            }
          }

        }
    }
</script>

<style scoped>

</style>
