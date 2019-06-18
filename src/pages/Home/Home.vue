<template>
  <div id="homeWrap">
    <header class="headerWrap">
      <div class="logo_search_login">
        <a javascript=":;" class="logo">网易严选</a>
        <span class="search">
          <!--<input type="text" placeholder="搜索商品，共1314款好物">-->
          <span class="search_click">搜索商品，共1314款好物</span>
          <i class="iconfont icon-sousuo sousuo"></i>
        </span>
        <a javascript=":;" class="login">登录</a>
      </div>
      <div class="tabWrap">
        <div class="tab_only_wrap">
           <ul class="tab_only_list" v-show="!showTabList">
             <li>
               <a javascript=":;">
                 推荐
                 <i class="line"></i>
               </a>
             </li>
             <li>
               <a javascript=":;">
                 居家生活
                 <i class="line" v-show="false"></i>
               </a>
             </li>
             <li>
               <a javascript=":;">
               服饰鞋包
                 <i class="line" v-show="false"></i>
               </a>
             </li>
             <li>
               <a javascript=":;">
               美食酒水
                 <i class="line" v-show="false"></i>
               </a>
             </li>
           </ul>
           <i class="iconfont icon-sanjiaoxing arrow"
              :class="{over: showTabList}"
              @click="tabList"></i>
         </div>
        <div class="tab_list_wrap"  v-show="showTabList">
          <span>全部频道</span>
          <ul class="tab_list">
            <li><a javascript=":;">推荐</a></li>
            <li><a javascript=":;">居家生活</a></li>
            <li><a javascript=":;">服饰鞋包</a></li>
            <li><a javascript=":;">美食酒水</a></li>
            <li><a javascript=":;">个护清洁</a></li>
            <li><a javascript=":;">母婴亲子</a></li>
            <li><a javascript=":;">运动旅行</a></li>
            <li><a javascript=":;">数码家电</a></li>
            <li><a javascript=":;">全球特色</a></li>
          </ul>
        </div>
    </div>
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/60e4ba11fdb8320eda453427bf287639.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/558a65f04bb58040fd20fa6ed9072aef.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="refundWrap">
      <div class="refund">
        <span>网易自营品牌</span>
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
      </div>
    </div>
    <div class="carouserWrap">
        <ul class="carouser">
          <li class="carouser-item">
            <a href="javascript:;" class="carouser-item-link">
              <img class="icon"
                  src="https://yanxuan.nosdn.127.net/98490496945553333bc0387863135e9d.png"" alt="">
              <span class="icon-text">新品首发</span>
            </a>
          </li>
          <li class="carouser-item">
            <a href="javascript:;" class="carouser-item-link">
              <img class="icon"
                   src="https://yanxuan.nosdn.127.net/98490496945553333bc0387863135e9d.png"" alt="">
              <span class="icon-text">新品首发</span>
            </a>
          </li>
          <li class="carouser-item">
            <a href="javascript:;" class="carouser-item-link">
              <img class="icon"
                   src="https://yanxuan.nosdn.127.net/98490496945553333bc0387863135e9d.png"" alt="">
              <span class="icon-text">新品首发</span>
            </a>
          </li>
          <li class="carouser-item">
            <a href="javascript:;" class="carouser-item-link">
              <img class="icon"
                   src="https://yanxuan.nosdn.127.net/98490496945553333bc0387863135e9d.png"" alt="">
              <span class="icon-text">新品首发</span>
            </a>
          </li>
          <li class="carouser-item">
            <a href="javascript:;" class="carouser-item-link">
              <img class="icon"
                   src="https://yanxuan.nosdn.127.net/98490496945553333bc0387863135e9d.png"" alt="">
              <span class="icon-text">新品首发</span>
            </a>
          </li>
          <li class="carouser-item">
            <a href="javascript:;" class="carouser-item-link">
              <img class="icon"
                   src="https://yanxuan.nosdn.127.net/98490496945553333bc0387863135e9d.png"" alt="">
              <span class="icon-text">新品首发</span>
            </a>
          </li>
          <li class="carouser-item">
            <a href="javascript:;" class="carouser-item-link">
              <img class="icon"
                   src="https://yanxuan.nosdn.127.net/98490496945553333bc0387863135e9d.png"" alt="">
              <span class="icon-text">新品首发</span>
            </a>
          </li>
          <li class="carouser-item">
            <a href="javascript:;" class="carouser-item-link">
              <img class="icon"
                   src="https://yanxuan.nosdn.127.net/98490496945553333bc0387863135e9d.png"" alt="">
              <span class="icon-text">新品首发</span>
            </a>
          </li>
          <li class="carouser-item">
            <a href="javascript:;" class="carouser-item-link">
              <img class="icon"
                   src="https://yanxuan.nosdn.127.net/98490496945553333bc0387863135e9d.png"" alt="">
              <span class="icon-text">新品首发</span>
            </a>
          </li>
          <li class="carouser-item">
            <a href="javascript:;" class="carouser-item-link">
              <img class="icon"
                   src="https://yanxuan.nosdn.127.net/98490496945553333bc0387863135e9d.png"" alt="">
              <span class="icon-text">新品首发</span>
            </a>
          </li>

        </ul>
    </div>
    <div class="promWrap">
      <a href="javascript:;" class="prom-link">
        <div class="prom-big">
          <img src="../../common/images/home/prom/big.gif" alt="big">
        </div>
        <div class="must-buy">
          <img src="../../common/images/home/prom/buy.png" alt="must-buy">
        </div>
        <div class="timer">
          <img src="../../common/images/home/prom/timer.png" alt="timer">
        </div>
        <div class="price">
        </div>
      </a>
    </div>
    <div class="floorWrap">
      <ul class="floor">
        <li class="floor-item">
          <a href="javascript:;" class="floor-item-link">
            <img class="out"
              src="../../common/images/home/floor/floor.png" alt="floor">
            <img class="in"
              src="../../common/images/home/floor/floor-small.png" alt="small">
          </a>
        </li>
        <li class="floor-item">
          <a href="javascript:;" class="floor-item-link">
            <img class="out"
              src="../../common/images/home/floor/floor.png" alt="floor">
            <img class="in"
              src="../../common/images/home/floor/floor-small.png" alt="small">
          </a>
        </li>
        <li class="floor-item">
          <a href="javascript:;" class="floor-item-link">
            <img class="out"
              src="../../common/images/home/floor/floor.png" alt="floor">
            <img class="in"
              src="../../common/images/home/floor/floor-small.png" alt="small">
          </a>
        </li>
        <li class="floor-item">
          <a href="javascript:;" class="floor-item-link">
            <img class="out"
              src="../../common/images/home/floor/floor.png" alt="floor">
            <img class="in"
              src="../../common/images/home/floor/floor-small.png" alt="small">
          </a>
        </li>
        <li class="floor-item">
          <a href="javascript:;" class="floor-item-link">
            <img class="out"
              src="../../common/images/home/floor/floor.png" alt="floor">
            <img class="in"
              src="../../common/images/home/floor/floor-small.png" alt="small">
          </a>
        </li>
        <li class="floor-item">
          <a href="javascript:;" class="floor-item-link">
            <img class="out"
              src="../../common/images/home/floor/floor.png" alt="floor">
            <img class="in"
              src="../../common/images/home/floor/floor-small.png" alt="small">
          </a>
        </li>
      </ul>
    </div>
    <div class="instantWrap">
      <ul class="instant">
        <li class="instant-item">
          <a href="javascript:;" class="instant-item-link">
            <img src="../../common/images/home/instant/instant.png" alt="instant">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: "Home",
    data() {
      return {
        showTabList: false
      }
    },
    computed: {},
    methods: {
      tabList() {
        this.showTabList = !this.showTabList
      }
    },
    watch: {},
    mounted() {
      setTimeout(() => {


      new Swiper('.swiper-container',{
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          //分页器的选择器
          el: '.swiper-pagination'
        }
      })

      },0)
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixin.styl'

  #homeWrap
    width 100%
    .headerWrap
      position fixed
      z-index 19
      left 0
      top 0
      width 100%
      height 150px
      background #fff
      .logo_search_login
        /*display flex*/
        /*flex-direction column*/
        margin 6px auto
        padding 3px 0 0 0
        width 95%
        height 35px
        .logo
          display inline-block
          width 22%
          height 40px
          color #000
          font 30px/40px '宋体'
          letter-spacing 2px
        .search
          position relative
          margin-right 6px
          display inline-block
          padding 2px 5px
          width 65%
          height 56px
          line-height 56px
          border-radius 2px
          background #eee
          .search_click
            display inline-block
            margin-left 50px
            font-size 30px
            color #666
          /*&::input-placeholder*/
              /*font-size 14px*/
            /*&::-webkit-input-placeholder*/
              /*font-size 14px*/
          .sousuo
            position absolute
            top 3px
            left 18px
            font-size 30px
        .login
          display inline-block
          width 10%
          height 40px
          background #fff
          border-radius 5px
          color #B4282D
          font-size 30px
          text-align center
          line-height 40px
          border 1px solid #B4282D
      .tabWrap
        position relative
        top 30px
        width 95%
        height 60px
        .tab_only_wrap
          position relative
          display flex
          width 100%
          height 60px
          .tab_only_list
            display flex
            width 80%
            height 60px
            line-height 60px
            >li
              position relative
              margin-left 20px
              font-size 30px
              .line
                position absolute
                left 0
                bottom 2px
                width 100%
                border-bottom 2px solid #B4282D
          .arrow
            position absolute
            z-index 19
            right 0
            top 3px
            font-size 30px
            &.over
              transform rotate(180deg)
              transition transform .5s
        .tab_list_wrap
          position absolute
          z-index 9
          top -3px
          font-size 30px
          background #fff
          .tab_list
            width 100%
            >li
              float left
              width 150px
              height 60px
              line-height 60px
              text-align center
              border 1px solid #bbb
              margin 13px 7px
    .swiper-container
      margin-top 150px
      width 100%
      height 360px
      .swiper-wrapper
        width 100%
        height 360px
        img
          width 100%


    .refundWrap
      width 100%
      height 72px
      .refund
        box-sizing border-box
        display flex
        align-items center
        justify-content space-around
        width 100%
        height 72px
        padding 0 .4rem
        color #B4282D


    .carouserWrap
      bottom-border-1px(#B4282D)
      width 100%
      height 372px
      background antiquewhite
      .carouser
        width 100%
        height 372px
        display flex
        flex-wrap wrap
        .carouser-item
          display flex
          width 110px
          height 156px
          margin-right 50px
          &:nth-child(5), &:nth-child(10)
            margin-right 0
          .carouser-item-link
            display flex
            flex-direction column
            .icon
              width 110px
              height 110px
            .icon-text
              width 110px
              height 36px
              text-align center
              line-height 36px


    .promWrap
      width 100%
      height 280px
      background skyblue
      .prom-link
        position relative
        width 100%
        height 280px
        .prom-big
          >img
            width 100%
            height 280px
        .must-buy
          img
            width 168px
            height 168px
            position absolute
            right 10%
            top 14%
        .timer
          img
            width 446px
            height 42px
            position absolute
            left 4%
            top 55%


    .floorWrap
      width 100%
      height 560px
      padding 20px
      box-sizing border-box
      background #B4282D
      .floor
        display flex
        flex-wrap wrap
        width 710px
        height 560px
        .floor-item
          width 351px
          height 186px
          &:nth-child(odd)
            margin 0 8px 8px 0
          .floor-item-link
            position relative
            width 351px
            height 186px
            .out
              width 351px
              height 186px
            .in
              position absolute
              left 58%
              top -150px
              width 160px
              height 160px





</style>