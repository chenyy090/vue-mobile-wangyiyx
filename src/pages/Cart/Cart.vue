<template>
  <div id="CartWrap">
    <div class="headerWrap">
      <header class="header">
        <div class="headerLeft">
          购物车
        </div>
        <div class="headerRight" @click="$router.replace('/personal')">
          领券
        </div>
      </header>
    </div>
    <div class="mainWrap">
      <div class="mainTop">
        <ul class="mainList">
          <li class="mainItem">
            <div class="circle"></div>
            <span>30天无忧退货</span>
          </li>
          <li class="mainItem">
            <div class="circle"></div>
            <span>48小时快速退款</span>
          </li>
          <li class="mainItem">
            <div class="circle"></div>
            <span>网易自营品牌</span>
          </li>
        </ul>
      </div>
      <div class="mainBottom">
        <div class="cartImg">
          <span>去加点什么吧</span>
        </div>
        <div class="btn"  @click="$router.replace('/personal')">登录</div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "Cart",
    data() {
      return {
        msg: ''
      }
    },
    computed: {},
    methods: {},
    watch: {}
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  #CartWrap
    width 100%
    height 100%
    .headerWrap
      width 100%
      height 88px
      padding 0 .8rem
      box-sizing border-box
      /*background aquamarine*/
      .header
        height 88px
        line-height 88px
        /*background sandybrown*/
        .headerLeft
          float left
          font-size 36px
          color #333
        .headerRight
          float right
          font-size 30px
          color #84282D
          margin-right 30px

    .mainWrap
      width 100%
      height 1246px
      background #f4f4f4
      .mainTop
        width 100%
        height 70px
        /*background yellow*/
        padding 0 30px
        box-sizing border-box
        .mainList
          display flex
          justify-content space-between
          align-items center
          height 70px
          /*background sandybrown*/
          .mainItem
            position relative
            .circle
              position absolute
              left -15px
              top 5px
              width 10px
              height 10px
              border-radius 50%
              border 1px solid #666
            span
              font-size 24px
              color #666

      .mainBottom
        .cartImg
          position relative
          margin 400px auto 0
          width 248px
          height 248px
          background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png") no-repeat center
          span
            position absolute
            left 40px
            top 230px
            font-size 28px
            color #999

        .btn
          width 480px
          height 92px
          line-height 92px
          text-align center
          background #b4282d
          margin 50px 135px 0
          color #fff
          font-size 30px

</style>