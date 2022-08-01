<template>
  <div class="prov-party1">
    <van-nav-bar title="省委编办" left-arrow/>
  <div class="search">
    <input type="text" placeholder="输入资源名称搜索">
    </div>
    <div>
      <ul>
        <li>全部</li>
        <li>未申请</li>
        <li>已申请</li>
        <li>筛选</li>
      </ul>
    </div>
    <div class="content">
     <Info :status="show"></Info>
    </div>
  </div>
</template>

<script>
import Info from '@/components/Info.vue'
export default {
  data () {
    return {
      show: true
    }
  },
  components: {
    Info
  }
}

</script>

<style lang="less" scoped>
  .search{
    overflow: hidden;
    text-align:center;
    padding:0 20px 0px 20px;
    input{
      width:100%;
      height:32px;
      border-radius:5px;
      background:url('../assets/img/search.png') no-repeat 88px 3px;
      background-size: 25px auto;
      background-color:#efeef4;
      border:0px;
      text-align:center;
    }
  }
  ul{
    list-style:none;
    li{
      margin-top:10px;
      height:42px;
      line-height:42px;
      float:left;
      width:25%;
      text-align:center;
    }
  }
  .content{
    .van-button--info{
    border-radius:8px;
    margin-left:20px;
  }
    padding-top:20px;
    // 边线合并的解决办法
    overflow: hidden;
    width:100%;
    height:718px;
    background-color:#f5f5f6;
    position:relative;
    .footer{
      height:60px;
      width:360px;
      margin-left:20px;
      background-color: white;
      padding-left:70px;
     position:absolute;
     float:right;
     margin-right:20px;
     .van-icon__image{
     width:18px;
     height:18px;
}
  }
   }
</style>
