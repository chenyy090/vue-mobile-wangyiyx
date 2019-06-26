<template>
  <div>
    <footer class="footer  top-border-1px">
      <a href="javascript:;" class="footer-item"
         :class="{on:'/home' === $route.path}"
         @click="goTo('/home')">
        <span class="item-icon">
          <i class="iconfont icon-shouye"></i>
        </span>
        <span>首页</span>
      </a>
      <a href="javascript:;" class="footer-item"
         :class="{on:'/classify' === $route.path}"
         @click="goTo('/classify')">
        <span class="item-icon">
          <i class="iconfont icon-group"></i>
        </span>
        <span>分类</span>
      </a>
      <a href="javascript:;" class="footer-item"
         :class="{on:'/discern' === $route.path}"
         @click="goTo('/discern')">
        <span class="item-icon">
          <i class="iconfont icon-laptop"></i>
        </span>
        <span>识物</span>
      </a>
      <a href="javascript:;" class="footer-item"
         :class="{on:'/cart' === $route.path}"
         @click="goTo('/cart')">
        <span class="item-icon">
          <i class="iconfont icon-gouwuche"></i>
        </span>
        <span>购物车</span>
      </a>
      <a href="javascript:;" class="footer-item"
         :class="{on:'/profile' === $route.path}"
         @click="goTo('/profile')">
        <span class="item-icon">
          <i class="iconfont icon-user"></i>
        </span>
        <span>个人</span>
      </a>
    </footer>
  </div>
</template>


<script>
  export default {
    name: "Footer",
    data() {
      return {
        msg: ''
      }
    },
    computed: {},
    methods: {
      goTo(path) {
        //编程式路由导航
        this.$router.replace(path)
      }
    },
    watch: {}
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixin.styl'

  .footer
    top-border-1px(#aaa)
    position fixed
    z-index 9
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 98px
    display flex
    .footer-item
      display flex
      flex 1
      width 70px
      height 48px
      text-align center
      flex-direction column
      align-items center
      margin 10px
      color #666
      &.on
        color #B4282D
      .item-icon
        font-size 20px
        margin-bottom 3px
        .iconfont
          font-size 40px
</style>