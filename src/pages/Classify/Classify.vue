<template>
  <div>
    <div id="classifyWrap">
      <div class="searchWrap">
          <div class="input" @click="$router.replace('/search')">
            <i class="iconfont icon-sousuo sousuo"></i>
            搜索商品，共{{totalNumbersOfProducts}}款好物
          </div>
      </div>
      <div class="classify-wrap">
        <div class="classify-tab-wrap">
          <ul class="classify-tab">
            <li class="classify-tab-item" v-for="(classify, index) in classifyArr" :key="index">
              <a href="javascript:;" class="classify-tab-item-link"
                 :class="{'tab-on': classify.id === id}"
                 @click="switchTabOn(classify )"
              >
                <span>{{classify.name}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="classify-lists-wrap">
          <div class="classify-lists-wrap-in">
            <div class="classify-img">
              <img :src="imgUrl" alt="1">
            </div>
            <div class="classify-lists">
              <ul class="classify-list" v-if="subCateList">
                <li class="classify-list-item"
                    v-for="(item, index) in subCateList"
                    :key="index"
                >
                  <a href="javascript:;" class="classify-list-item-link">
                    <img :src="item.wapBannerUrl" alt="1">
                    <span>{{item.name}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'


  export default {
    name: "Classify",
    data() {
      return {
        tabOn: false,
        id: 1005000,
        imgUrl: "//nos.netease.com/yanxuan/f0d0e1a542e2095861b42bf789d948ce.jpg"
      }
    },
    computed: {
      ...mapState({
        totalNumbersOfProducts: state => state.classify.totalNumbersOfProducts,
        classifyArr: state => state.classify.classifyArr
      }),

      subCateList() {
        const {classifyArr, id} = this

        const list = classifyArr.filter(classify => {
          // console.log(classify.id,id)
          return classify.id === id
        })
        //过滤后的数组只有一项
        if (list.length)  return list[0].subCateList
      }
    },
    methods: {
      switchTabOn(classify) {
        this.tabOn = !this.tabOn
        //获取当前点击的tab的id,让对应的ul（同id）显示
        //把当前id保存在data中，便于模板中使用
        this.id = classify.id
        this.imgUrl = classify.imgUrl
        sessionStorage.setItem("ssid",this.id)
      }
    },

    mounted() {
      this.id = Number(sessionStorage.getItem("ssid"))
      //触发action,发送请求
      this.$store.dispatch('getTotalNumbersOfProducts')
      this.$store.dispatch('getClassify')

      new BScroll('.classify-tab-wrap', {
        scrollY: true,
        click: true
      })

      new BScroll('.classify-lists-wrap', {
        scrollY: true,
        click: true
      })

    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  #classifyWrap
    width 100%
    .searchWrap
      position fixed
      z-index 19
      width 100%
      height 88px
      font-size 30px
      .input
        width 690px
        height 56px
        line-height 56px
        background #eee
        margin 15px auto
        text-align center
        border-radius 5px
        .sousuo
          font-size 30px
    .classify-wrap
      box-sizing border-box
      padding-top 88px
      width 100%
      min-height 1148px
      display flex
      justify-content space-around
      .classify-tab-wrap
        overflow hidden
        height 1120px
        width 162px
        /*background salmon*/
        .classify-tab
          /*min-height 1300px*/
          width 162px
          .classify-tab-item
            width 162px
            height 50px
            /*background aquamarine*/
            margin-bottom 30px
            .classify-tab-item-link
              display block
              width 162px
              height 50px
              line-height 50px
              text-align center
              margin-top 30px
              font-size 28px
              box-sizing border-box
              &.tab-on
                position relative
                left -6px
                border-left 10px solid #B4282D
                color #B4282
            /*  &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: .08rem;
                background-color: #ab2b2b;*/
      .classify-lists-wrap
        height 1088px
        width 528px
        overflow hidden
        /*background skyblue*/
        .classify-lists-wrap-in
          overflow hidden
          min-height 600px
          width 528px
          .classify-img
            width 528px
            height 192px
            img
              width 528px
              height 192px
              /*background url("http://nos.netease.com/yanxuan/b2bb514da7b9e126aadbb36d561919de.jpg")*/
              background-size cover
              margin-bottom 30px
          .classify-lists
            width 528px
            /*height 1000px*/
            .classify-list
              width 528px
              /*height 1000px*/
              /*background aquamarine*/
              .classify-list-item
                float left
                width 144px
                height 216px
                /*background yellowgreen*/
                margin-right 30px
                .classify-list-item-link
                  display block
                  width 144px
                  height 216px
                  text-align center
                  img
                    width 144px
                    height 144px
                    border-radius 50%
</style>