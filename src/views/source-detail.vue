<template>
  <div class="source-detail">
    <van-nav-bar title="数源详情" left-arrow/>
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
      show: false
    }
  },
  components: {
    Info
  }
}

</script>

<style lang="less" scoped>
  .content{
    width:390px;
    height:718px;
    background-color:#1919b1;
    position:relative;
    // .van-button--info{
    // border-radius:8px;
    // margin-left:20px;
  }
    // padding-top:20px;
    // 边线合并的解决办法
    // overflow: hidden;
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
</style>
