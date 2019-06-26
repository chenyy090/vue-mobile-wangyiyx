<template>
  <div id="personalWrap">
    <header class="headerWrap">
     <span class="left">
        <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
     </span>
      <span class="center" @click="$router.replace('/home')">
        网易严选
      </span>
      <span class="right">
        <i class="iconfont icon-sousuo" @click="$router.replace('/search')"></i>
        <i class="iconfont icon-gouwuche" @click="$router.replace('/cart')"></i>
      </span>
    </header>
    <div class="mainWrap" v-show="!phone">
      <div class="mainTop">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="1">
      </div>
      <div class="mainMiddle">
        <div class="btnPhone" @click="phone=true">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="btnEmail">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="register">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
      <div class="mainBottom">
        <div class="wx itemBottom">
          <i class="iconfont icon-changyonglogo28"></i>
          <span>微信</span>
        </div>
        <div class="qq itemBottom">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </div>
        <div class="wb itemBottom">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
  <div id="phoneLogin" v-show="phone">
    <div class="imgWrap">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="2">
    </div>
    <form>
      <input type="text" placeholder="请输入手机号" class="phoneNum"
             ref="inpPhone"
             onblur="checkPhone">
      <input type="text" placeholder="请输入短信验证码" class="code">
      <button class="getCode">获取验证码</button>
      <div class="problem">
        <span class="left">遇到问题？</span>
        <span class="right">使用密码验证登录</span>
      </div>
      <div class="login">
        <span>登录</span>
      </div>
      <div class="others">
        <span>其他登录方式</span>
      </div>
      <div class="register">
        <span>注册账号</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
    </form>
  </div>
  </div>
</template>


<script>
  export default {
    name: "Profile",
    data() {
      return {
        phone: false
      }
    },
    computed: {},
    methods: {
      checkPhone () {
        let phoneV = this.$refs.inpPhone.value
        if(!(/^1[3456789]\d{9}$/.test(phoneV))){
          alert("手机号码有误，请重填");
          return false
        }
      }
    },
    watch: {}
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  #personalWrap
    width 100%
    height 100%
    .headerWrap
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 100px
      /*background skyblue*/
      .left
        margin-left -20px
        i
          font-size 50px
          color #555555
      .center
        font-size 35px
        letter-spacing 10px
        font-family 'SimSun'
      .right
        margin-right -50px
        i
          margin-right 30px
          font-size 50px
          color #555555


    .mainWrap
      position relative
      width 100%
      height 1246px
      background #f2f5f4
      .mainTop
        box-sizing border-box
        width 100%
        height 408px
        padding 160px 0
        text-align center
        img
          width 268px
          height 90px

      .mainMiddle
        width 100%
        height 290px
        /*background yellow*/
        .btnPhone
          margin 0 auto 16px
          width 670px
          height 94px
          line-height 94px
          text-align center
          background #B4282D
          color #fff
          font-size 28px
          i
            font-size 40px
            margin-right 18px
        .btnEmail
          margin 0 auto 16px
          width 670px
          height 94px
          line-height 94px
          background #f2f5f4
          color #B4282D
          font-size 28px
          text-align center
          border 1px solid #B4282D
          i
            font-size 40px
            margin-right 18px
        .register
          margin 0 auto 16px
          width 670px
          height 40px
          line-height 40px
          text-align center
          font-size 26px
          color #333
          i
            font-size 30px
            margin-right 18px
      .mainBottom
        width 100%
        height 40px
        position absolute
        left 0
        bottom 80px
        font-size 26px
        color #7f7f7f
        .itemBottom
          float left
          margin-left 100px
          height 38px
          text-align center
          padding 0 10px
          &.wx
            width 150px
            height 40px
          &.wb
            margin-left -5px
            width 150px
            height 40px
          &.qq
            width 150px
            height 40px
            border-left 2px solid #979797
            border-right 2px solid #979797
            padding 0 10px
            margin 0 10px 0 10px
          i
            font-size 40px
            margin-right 15px

  #phoneLogin
    width 100%
    height 896px
    /*background aquamarine*/
    .imgWrap
      margin 50px auto 0
      width 192px
      height 64px
      img
        width 192px
        height 64px
    form
      position relative
      margin 0 auto
      box-sizing border-box
      width 670px
      height 782px
      /*background sandybrown*/
      padding 114px 0 0 0
      >input
        outline none
        font-size 24px
      .phoneNum
        width 670px
        height 90px
        border-bottom 1px solid #bbb
        margin 13px 0
      .code
        width 670px
        height 90px
        border-bottom 1px solid #bbb
        margin 13px 0
      .getCode
        position absolute
        right 50px
        bottom 480px
        width 168px
        height 58px
        border 1px solid #bbb
        border-radius 10px
        font-size 28px
        color #333
        background #fff
      .problem
        width 670px
        height 90px
        line-height 90px
        font-size 29px
        .left
          float left
        .right
          float right
      .login
        margin 0 auto 32px
        width 670px
        height 94px
        line-height 94px
        text-align center
        background #B4282D
        color #fff
        font-size 28px
      .others
        margin 0 auto 32px
        width 670px
        height 94px
        line-height 94px
        background #f2f5f4
        color #B4282D
        text-align center
        border 1px solid #B4282D
        font-size 28px
      .register
         width 750px
         height 40px
         line-height 40px
         text-align center
         span
           display inline-block
           width 110px
           height 32px
           font-size 26px
         i
           display inline-block
           width 28px
           height 28px
           font-size 26px

</style>