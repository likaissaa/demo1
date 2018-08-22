<template>
    <div id="search">
      <p>查询------输入input内容（可以多次添加）包括时间 + 下拉框  点击复制提取代码</p>
      <div>
        <el-input class="search-input" v-model="searchtext" placeholder="输入文字内容" v-on:keyup.enter.natvie="searchmore(0)"/>
        <el-input class="search-input" v-model="searchinput" placeholder="输入model内容" v-on:keyup.enter.native="searchmore(0)"/>
        <el-button type="danger" @click="searchmore(1)">添加时间</el-button>
        <el-button type="danger" @click="searchmore(2)">添加下拉框 </el-button>
        <el-button type="danger" @click="searchmore(3)">添加查询按钮</el-button>
      </div>
      </el-input>
      <el-button type="primary"@click="searchmore">生成多次查询功能</el-button>查询条数{{count}}
      <el-button type="default"@click="clear(0)">清空</el-button>
      <el-button type="warning" class="tag-read" @click="copyu" :data-clipboard-text="searchcontent">复制</el-button>
      <el-input
        type="textarea"
        autosize
        placeholder="请生成多次查询代码"
        v-model="searchcontent"  :autosize="{ minRows: 2}"/>

    </div>
</template>

<script>
  import Clipboard from 'clipboard';
    export default {
        name: "search",
        data(){
          return{
            searchtext:"",
            searchinput:"",
            searchcontent:'',
            main:"",
            count:0
          }
        },
        methods:{
          clear(index){
            if(index==0){
              this.searchcontent="";
              this.main="";

              this.count=""
            }
          },
          searchmore(index){
            //核心内容;
            //添加数组;
            this.count++
            if(index==0) {
                this.main += `
                  <label>
                  ` + this.searchtext + `:<input type="text" class="input-medium" v-model="` + this.searchinput + `" v-on:keyup.enter="search"/>
                  </label>`

                }

            else if(index ==1){
                this.main +=`
                  <label>
                    <input v-el:begintime id="beginTime" class="input-medium" type="text" readonly="readonly" maxlength="20" class="form-control" onclick ="WdatePicker({dateFmt:'yyyy'})"/>
                  </label>`;
            }
            else if(index == 2){
              this.main +=`
                  <select v-model="jidu" name="quarter">
                      <option selected>第一季度</option>
                    </select>`;
            }
            else if(index == 3){
              this.main +=`
                  <button type="button" class="btn btn-primary" @click.prevent="search">查询</button>`
            }
            var header=`
                <form class="form-search offset1">`;
            var footer=`
              </from>`
            this.searchinput="";
            this.searchtext="";
            this.searchcontent=header+this.main+footer;

          },
          copyu(){
            const clipboard = new Clipboard(".tag-read")
            clipboard.on('success', e => {
              console.log('复制成功');
              clipboard.destroy()
            })
            clipboard.on('error',e => {
              console.log("该浏览器不支持自动复制功能");
            })
          }
        }
    }
</script>

<style scoped lang="less">
    #search{
      .search-input{
        width:180px!important;
      }
    }
</style>
