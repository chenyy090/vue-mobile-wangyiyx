<template>
  <div>
    <div id="crossWrap">
      <ul v-for="(manualPer, index) in manual" :key="index">
        <li  v-for="topic in manualPer.topics" :key="topic.topicId">
          <Cross1 :topic="topic" v-if="topic.type === 0"/>
          <Cross2 :topic="topic" v-if="topic.type === 1"/>
          <!--<a href="javascript:;" class="manualLink">-->
            <!--<div class="avatar">-->
              <!--<img :src="topic.avatar" alt="2">-->
              <!--<span>{{topic.nickname}}</span>-->
            <!--</div>-->
            <!--<div class="title">{{topic.title}}</div>-->
            <!--<div class="pic">-->
              <!--<img :src="topic.picUrl" alt="2">-->
            <!--</div>-->
            <!--<div class="count">-->
              <!--<i class="iconfont icon-shouye"></i>-->
              <!--<span>{{topic.countInt}}w人看过</span>-->
            <!--</div>-->
          <!--</a>-->
          <!--<Three v-for>-->
            <!--<One v-if="type==1"></One>-->
            <!--<Two v-if="type==1"></Two>-->
          <!--</Three>-->
        </li>
      </ul>
    </div>
  </div>
    <!--<div id="verticalWrap">-->
      <!--<ul v-for="(manualPer, index) in manual" :key="index">-->
        <!--<li  v-for="topic in manualPer.topics" :key="topic.topicId">-->
          <!--&lt;!&ndash;<Cross2 :topic="topic" v-if="topic.style === 2"/>&ndash;&gt;-->
          <!--&lt;!&ndash;<a href="javascript:;" class="verticalLink">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="verticalLeft">&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="avatar">&ndash;&gt;-->
                <!--&lt;!&ndash;<img :src="topic.avatar" alt="2">&ndash;&gt;-->
                <!--&lt;!&ndash;<span>{{topic.nickname}}</span>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="title">&ndash;&gt;-->
                <!--&lt;!&ndash;{{topic.title}}&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="desc">&ndash;&gt;-->
                <!--&lt;!&ndash;{{topic.subTitle}}&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="count">&ndash;&gt;-->
                <!--&lt;!&ndash;<i class="iconfont icon-shouye"></i>&ndash;&gt;-->
                <!--&lt;!&ndash;<span>45w人看过</span>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="verticalRight">&ndash;&gt;-->
              <!--&lt;!&ndash;<img :src="topic.picUrl" alt="2">&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</a>&ndash;&gt;-->
        <!--</li>-->
      <!--</ul>-->
   <!--</div>-->

</template>


<script>
  import {mapState} from 'vuex'
  import Cross1 from './Cross1'
  import Cross2 from './Cross2'

  export default {
    name: "Cross",
    components: {
      Cross1,
      Cross2
    },
    data() {
      return {
        countInt: 0
      }
    },
    computed: {
      ...mapState({
        manual: state => state.cross.manual
      }),

      countIn() {
        const {manual} = this
        manual.forEach(manualPer => {
          manualPer.topics.forEach(topic => {
            const readCount =  topic.readCount

            const countInt = Math.floor(readCount / 10000)
            topic.countInt = countInt
            // return countInt
          })
        })
      }

    },
    methods: {},
    watch: {},
    mounted() {
      this.$store.dispatch('getManual')
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  #crossWrap
    width 100%
    height 680px
    padding 20px
    .manualLink
      display block
      width 690px
      margin 20px 30px 10px 10px
      .avatar
        width 690px
        height 56px
        /*background yellowgreen*/
        img
          width 54px
          height 54px
          border-radius 50%
          vertical-align middle
          margin-right 20px
        span
          font-size 28px
          color #333
      .title
        width 690px
        height 104px
        line-height 50px
        /*background yellow*/
        margin 5px 0 16px
        font-size 36px
        color #333
      .pic
        width 690px
        height 376px
        img
          width 690px
          height 376px
      .count
        width 690px
        height 34px
        /*background aquamarine*/
        margin 18px 0 -16px
        i
          margin 0 8px 0 0
        span
          color #999
          font-size 24px



  #verticalWrap
    width 100%
    height 336px
    /*background sandybrown*/
    padding 32px 30px
    margin 20px 0
    .verticalLink
      display block
      width 100%
      height 336px
      .verticalLeft
        float left
        width 400px
        height 272px
        .avatar
          width 400px
          height 56px
          img
            width 54px
            height 54px
            border-radius 50%
            vertical-align middle
            margin-right 20px
          span
            color #333
            font-size 28px

        .title
          width 400px
          height 120px
          padding 32px 0 0
          font-size 36px
        .desc
          width 400px
          height 48px
          color #7f7f7f
          padding 8px 0 0color
          font-size 28px
        .count
          i
            width 28px
            height 20px
            margin 0 8px 0 0
          span
            width 152px
            height 32px
            font-size 24px


    .verticalRight
       float right
       width 272px
       height 272px
       /*background aquamarine*/
       margin-right 60px
       img
         width 272px
         height 272px
</style>