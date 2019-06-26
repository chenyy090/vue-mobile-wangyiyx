<template>
  <div id="discernWrap" ref="b1">
    <div class="header-nav">
      <header class="headerWrap">
       <span class="left">
          <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
       </span>
        <span class="center">
          <a href="javascript:;" class="find active">发现</a>
          <a href="javascript:;" class="choose">甄选家</a>
        </span>
        <span class="right">
          <i class="iconfont icon-sousuo" @click="$router.replace('/search')"></i>
          <i class="iconfont icon-gouwuche" @click="$router.replace('/cart')"></i>
        </span>
      </header>
      <div class="navWrap" ref="b2">
        <ul class="navList">
          <li class="navItem" v-for="tab in tabs" :key="tab.tabId">
            <a :href="tab.linkUrl" class="navLink"
              :class="{active: tabId === tab.tabId}"
               @click.prevent="activeFn(tab)"
            >{{tab.tabName}}</a>
          </li>
       </ul>
      </div>
    </div>
    <Cross/>
  </div>
</template>


<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Cross from './Cross/Cross'
  // import CrossUp from './CrossUp/CrossUp'

  export default {
    name: "Discern",
    components: {
      Cross,
      // CrossUp
    },
    data() {
      return {
        tabId: 9
      }
    },
    computed: {
      ...mapState({
        tabs: state => state.discern.tabs,
        upLoading: state => state.upLoading.upLoading
      })
    },
    methods: {
      activeFn(tab) {
        this.tabId = tab.tabId
      },

      //在一次上拉加载的动作后，这个时机一般用来去后端请求数据

      _initUpScroll() {
        if (!this.upScroll) {
          this.upScroll = new BScroll(this.$refs.b1, {
            scrollY: true,
            click: true,
            probeType: 3,
            pullDownRefresh: {
              threshold: 40, // 刷新时机
              stop: 30       // 回弹停留的距离
            },
            pullUpLoad: {
              threshold: 20  // 开始加载的时机
            },
            startY: 0
          })
        } else {
          this.upScroll.refresh()
        }
        //this.pullDownEvent()
        this.pullUpLoadEvent()
      },
      pullUpLoadEvent() {
        this.upScroll.on('pullingUp', () => {
          console.log('上拉加载')
          this.$store.dispatch('getUpLoading')
          this.$nextTick(() => {
            this.upScroll.finishPullUp()

          })
        })
      },
      //导航部分
    },
    async mounted() {

      await this.$store.dispatch('getTabs')
      new BScroll(this.$refs.b2, {
        scrollX: true,
        click: true
      })
    },

    watch: {
      tabIds() {
        this.$nextTick(() => {
          this._initUpScroll()
        })
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  #discernWrap
    width 100%
    height 99999px
    .headerWrap
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 100px
      /*background skyblue*/
      .left
        margin-left -50px
        i
          font-size 50px
          color #555555
      .center
        a
          font-size 35px
          &:nth-child(1)
            margin-right 30px
          &.active
            font-size 40px
            color #B4282D
            font-weight 700
      .right
        margin-right -50px
        i
          font-size 50px
          color #555555

    .navWrap
      width 100%
      height 92px
      border-top 2px solid #ccc
      /*background aquamarine*/
      .navList
        /*display flex*/
        /*flex-direction column*/
        /*flex-wrap wrap*/
        /*min-width 100%*/
        min-width 1200px
        height 72px
        white-space nowrap
        /*overflow hidden*/
        /*overflow-x auto*/
        /*overflow-y hidden*/
        .navItem
          height 72px
          float left
          margin 20px
          .navLink
            display block
            height 72px
            line-height 72px
            font-size 30px
            &.active
              border-bottom 5px solid #B4282D
</style>