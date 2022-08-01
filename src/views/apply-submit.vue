<template>
  <div class="apply-submit">
    <van-nav-bar  left-arrow/>
    <div class="bg">
     <img src="../assets/img/submit.png" alt="">
     <div class="bg-word">
     <span>申请已提交</span>
     <span>审核可在3-7个工作日内完成,</span>
     <span>请关注浙政钉消息中心</span>
     </div>
    </div>
    <button class="confirm">确认</button>
    <button class="detail">查看详情</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .bg{
    width:100%;
    height:230px;
    text-align:center;
    padding-top:90px;
    background-color: #fff;
    .bg-word{
      margin-top:30px;
      span:first-child{
        color:#333333;
        font-size:20px;
        font-weight:bold;
      }
    }
    span{
      display:block;
      height:30px;
      color:#999999;
      font-size:15px;
    }
  }
  button{
    margin-top:20px;
    width:90%;
    margin-left:20px;
    height:45px;
  }
  .confirm{
    background-color: #3296fa;
    border:0px;
    border-radius:5px;
    color:white;
  }
  .detail{
    border:1px solid #e5e5e5;
  }
</style>
