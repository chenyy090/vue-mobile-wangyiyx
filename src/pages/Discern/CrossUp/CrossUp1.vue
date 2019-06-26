<template>
  <div>
    <Split/>
    <a href="javascript:;" class="manualLink">
      <div class="avatar">
        <img :src="topic.avatar" alt="2">
        <span>{{topic.nickname}}</span>
      </div>
      <div class="title">{{topic.title}}</div>
      <div class="pic">
        <img :src="topic.picUrl" alt="2">
      </div>
      <div class="count">
        <i class="iconfont icon-shouye"></i>
        <span>{{topic.countInt}}w人看过</span>
      </div>
    </a>
    <!--<Three v-for>-->
    <!--<One v-if="type==1"></One>-->
    <!--<Two v-if="type==1"></Two>-->
    <!--</Three>-->
  </div>
</template>


<script>
  export default {
    name: "CrossUp1",
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

</style>