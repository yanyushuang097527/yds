<template>
  <div class="info">
     <h3>浙江省投资项目实时信息表</h3>
      <p>目录更新时间:2021-05-02 10:00:00</p>
      <ul>
        <li>省市基础数据</li>
        <li>受限共享</li>
        <li>受限开放</li>
        <li>未申请</li>
      </ul>
      <p>数据领域:生态环境</p>
      <p>来源部门:东阳市</p>
      <p>申请量:100</p>
      <p>访问量:10</p>
      <p>安全等级:L2</p>
      <p>ads_share_qxj_share_dwplan...<span style="margin-left:px;color:#3296FA">复制</span></p>
       <div class="footer">
        <van-button type="info" v-if="status">加入申请车</van-button>
        <van-button type="info" v-if="status">申请资源</van-button>
        </div>
  </div>
</template>

<script>
export default {
  name: 'MyInfo',
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    status: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
   .info{
   width:351px;
   height:350px;
   background-color: white;
   margin-left:20px;
   padding-top:10px;
   margin-bottom:20px;
   ul{
   margin-top:10px;
   margin-left:15px;
   margin-bottom:5px;
   li{
  height:30px;
  line-height:30px;
  padding: 0 8px;
   display:inline-block;
   background-color:#ededed;
   margin-right:5px;
   font-size:14px;
   color:#666666;
 }
 li:first-child{
   border:1px solid #b7eb8f;
   background-color:#f6ffed;
   color:#52c41a;
 }
 }
 p{
   margin-top:9px;
   margin-left:15px;
   color:#666666;
 }
 h3{
   margin-left:15px;
 }
   }
   .footer{
      height:60px;
      width:360px;
      margin-left:20px;
      background-color: white;
      padding-left:70px;
      position:absolute;
      float:right;
      margin-right:20px;
     .van-button:first-child{
       background: url('../assets/img/car1.png') no-repeat 3px 8px;;
       background-size:20px 20px;
       color:#666666;
       padding-right:0px;
       width:120px;
       height:40px;
       border-radius:5px;
       border:1px solid gray;
       margin-top:20px;
     }
     .van-button:last-child{
       background: url('../assets/img/apply-source.png') no-repeat 6px 8px;
       background-color: #3296fa;
       background-size:20px 20px;
       color:#fff;
       padding-right:0px;
       width:120px;
       height:40px;
       border-radius:5px;
       border:1px solid gray;
       margin-left:10px;
       margin-top:20px;
     }
}

</style>
