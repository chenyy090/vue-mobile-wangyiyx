<template>
    <div id="searchWrap">
    <div class="searchTop">
      <div class="searchTopInput">
        <label for="ipt"></label>
          <i class="iconfont icon-sousuo sousuo"></i>
          <i class="iconfont icon-guanbi close" @click="msg=''"></i>
          <input type="text" id="ipt"
                 :placeholder="search.defaultKeyword ? search.defaultKeyword.keyword : ''"
                 @keyup="throttle"
                 v-model="msg"
                 ref="inp"
                 @keyup.enter="updateHistory"
          />
          <span @click="$router.push('/home')">取消</span>
      </div>
      <div class="isHistory" v-show="inpVArr.length">
        <div class="history">
           <h3>历史记录</h3>
          <i class="iconfont icon-shanchu" @click="delHistory"></i>
        </div>
        <div class="nav">
          <ul class="navList">
            <li class="navItem" v-show="inpVArr.length"
                v-for="(inp, index) in inpVArr" :key="index"
            >{{inp}}</li>
          </ul>
        </div>
      </div>
    </div>
    <Split v-show="inpVArr.length"/>
    <div class="searchBottom" v-show="!msg">
      <div class="hotWrap">
      <div class="hot">
        <div class="hotTitle">热门搜索</div>
      </div>
      <div class="hotListWrap">
        <ul class="hotList">
          <li class="hotItem"
              v-for="(hotKeywordItem, index) in search.hotKeywordVOList" :key="index"
          >
            <a :href="hotKeywordItem.schemeUrl"
               :class="{active: hotKeywordItem.highlight}">
              {{hotKeywordItem.keyword}}
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
    <div class="searchComplete" v-show="msg">
      <ul class="searchCompleteList">
        <li class="searchCompleteItem"
            v-for="(searchCompleteItem, index) in searchComplete"
            @keyup="toSearch"
        >
          {{searchCompleteItem}}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  import {mapState} from 'vuex'

  export default {
    name: "Search",
    data() {
      return {
        msg: '',
        inpVArr: []
      }
    },
    computed: {
      ...mapState({
        search: state => state.search.search,
        searchComplete: state => state.searchComplete.searchComplete,
        valueHistory: state => state.valueHistory.valueHistory
      }),

      // defaultK() {
      //   const {defaultKeyword} = this.search
      //   console.log(defaultKeyword)
      //   if (defaultKeyword) {
      //     return defaultKeyword.keyword
      //   }
      // }
    },
    mounted() {
      //初始化显示 占位符 及 关键词列表
      this.$store.dispatch('getSearch')

      //一上来就读取存在本地的搜索历史记录信息
      //没有历史记录的时候是[]
      this.inpVArr = JSON.parse(localStorage.getItem('inpK') || '[]')
    },
    methods: {

      //模糊匹配,搜索联想(keyup)用函数节流,在规定时间只调用一次
       throttle() {
        // 上一次触发函数的时间，默认为0
        let lastTime = 0
        const nowTime = Date.now()
        if (nowTime - lastTime > 300) {
          this.$store.dispatch('getSearchComplete', this.msg)
          lastTime = nowTime
        }
      },

      /*searchCompleteFn() {
        //用函数防抖实现
        clearTimeout(this.timer)
          this.timer = setTimeout(async () => {
          this.$store.dispatch('getSearchComplete',this.msg)
        },300)
      },*/

      //搜索列表中的数据
      toSearch() {
        this.$store.dispatch('getSearch')
      },

      //enter后把内容显示到历史记录
      updateHistory() {
        //alert(11)
        const inpV = this.$refs.inp.value
        this.inpVArr.push(inpV)
        //把数组转化成json字符串，再放进localStorage中

        //因为存的时候系统自动调用toString把数据转换成字符串
        //数组用toString转换字符串格式会乱
        localStorage.setItem('inpK', JSON.stringify(this.inpVArr))
        // console.log(localStorage.getItem('inpK'))
      },

      //点击删除图标，隐藏历史记录结构
      delHistory() {
        //1、删除本地缓存
        localStorage.removeItem('inpK')
        //2、更新状态为空
        this.inpVArr = []
      }
    }
  }


</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  #searchWrap
    position relative
    width 100%
    height 100%
    .searchTop
      box-sizing border-box
      width 100%
      padding 0 30px
      /*background sandybrown*/
      .searchTopInput
        position relative
        width 100%
        height 88px
        background
        .sousuo
          position absolute
          left 18px
          top 25px
          font-size 40px
        .close
          position absolute
          right 120px
          top 30px
          font-size 30px
          color #ccc
        input
          outline none
          box-sizing border-box
          margin-top  20px
          width 604px
          height 56px
          background #f4f4f4
          padding 0 0 0 70px
          &::input-placeholder
            font-size 30px
          &::-webkit-input-placeholder
            font-size 30px
        span
          margin-left 30px
          font-size 28px


      .history
        margin-top 30px
        width 690px
        height 120px
        h3
          float left
          width 112px
          height 41px
          color #999
          font-size 28px
        i
          float right
          width 54px
          height 54px
          font-size 30px

      .nav
        width 690px
        min-height 100px
        .navList
          width 690px
          min-height 100px
          .navItem
            margin -50px 30px 70px 0
            float left
            text-align center
            border 1px solid #ccc
            height 50px
            padding 0 20px
            line-height 50px
    .searchBottom
      min-height 1040px
      background #eee
      .hotWrap
        width 100%
        min-height 410px
        padding 0 30px
        background #fff
        .hot
          width 690px
          height 90px
          padding-top 30px
          .hotTitle
            font-size 28px
            color #999
        .hotListWrap
          width 720px
          padding 0 30px
          box-sizing border-box
          min-height 316px
          .hotList
            min-height 316px
            .hotItem
              float left
              height 47px
              margin 0 32px 32px 0
              border 1px solid #ccc
              a
                height 47px
                padding 0 15px
                line-height 47px
                padding 0 15px
                display block
                font-size 24px
                &.active
                  color #B4282D
                  border 1px solid #B4282D

    .searchComplete
      position absolute
      left 0
      top 80px
      width 720px
      min-height 800px
      background #fff
      .searchCompleteList
        width 680px
        min-height 800px
        padding 0 30px
        .searchCompleteItem
          height 104px
          line-height 104px
          border-bottom 1px solid #555

</style>