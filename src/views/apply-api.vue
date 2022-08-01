<template>
  <div class="apply-source">
    <van-nav-bar title="申请接口源" left-arrow/>
    <div class="apply-info">申请信息-金华市婚姻登记信息-API-协议转换</div>
    <div class="content">
      <div class="info1">
      <p>应用场景<input type="text" placeholder="请选择"></p>
      <p>应用系统<input type="text" placeholder="请选择"></p>
      <p>系统IP<input type="text" placeholder="请输入"></p>
      <p>部署层级<input type="text" placeholder="请输入"></p>
      <p>接口调用量<input style="margin-left:25px;" type="text" placeholder="请输入接口日均调用量"></p>
      <p>使用期限<input type="text" placeholder="请输入"></p>
      <p>申请资料<input type="text" placeholder="选择性上传"></p>
      </div>
      <div class="info2">
      <p>申请依据<input type="text" placeholder="请输入"></p>
      </div>
      <div class="info3">
      <p>备注<input style="margin-left:40px;" type="text" placeholder="选填"></p>
      </div>
    </div>
    <div class="footer">
    <input type="submit" placeholder="立即提交" class="submit">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
body{
  background-color: #f5f5f6;
}
.apply-info{
  height:50px;
  font-size:22px;
  color:#333333;
  padding-top:10px;
}
  .content{
    background-color: #f5f5f6;
    height:700px;
    padding-top:15px;
    .info1{
      height:378px;
      background-color:white;
      p{
        height:54px;
      }
    }
    .info2{
      height:100px;
      background-color:white;
      margin-top:10px;
      p{
        border:0px;
      }
    }
    .info3{
      height:100px;
      background-color:white;
      margin-top:10px;
      p{
        border:0px;
      }
  }
  }
   p{
      margin:0px;
      padding-left:10px;
      // background:url('../img/S3.png') no-repeat 340px 20px;
      background-size:25px 25px;
      height:59px;
      line-height:59px;
      border-bottom:1px solid #dddddd;
      input{
        margin-left:10px;
        height:20px;
        border:0px;
      }
   }
   .footer{
     margin-top:-90px;
     height:110px;
     background-color: #fff;
   .submit{
    //  margin-top:-70px;
    //  margin-bottom:20px;
     width:330px;
     height:40px;
     margin-left:24px;
     border-radius:5px;
     border:0px;
   }
   }
</style>
