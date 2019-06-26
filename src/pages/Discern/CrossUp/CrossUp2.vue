<template>
  <div>
    <Split/>
    <a href="javascript:;" class="verticalLink">
      <div class="verticalLeft">
        <div class="avatar">
          <img :src="topic.avatar" alt="2">
          <span>{{topic.nickname}}</span>
        </div>
        <div class="title">
          {{topic.title}}
        </div>
        <div class="desc">
          {{topic.subTitle}}
        </div>
        <div class="count">
          <i class="iconfont icon-shouye"></i>
          <span>{{topic.countInt}}w人看过</span>
        </div>
      </div>
      <div class="verticalRight">
        <img :src="topic.picUrl" alt="2">
      </div>
    </a>
  </div>
</template>


<script>
  export default {
    name: "CrossUp2",
    props: {
      topic: Object
    },
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