<template>
  <div>
    <button @click="handleClick">更新状态按钮</button>
    <p>{{msg}}</p>
    <button @click="$emit('test')">测试解绑自定义事件</button>
    <button @click="$destroy()">测试组件销毁</button>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        msg: '测试初始化数据'
      }
    },
    methods: {
      handleClick() {
        console.log('点击事件');
        this.msg = '修改之后的数据';
      }
     },
    // beforeCreate() {
    //   // 实例初始化
    //   console.log('------------- beforeCreate -------------');
    //   console.log(this);   //组件对象
    //   console.log(this.$el); // $el不可见   undefined
    //   console.log(this.msg); // 数据观测 (data observer) 和 event/watcher 事件配置没有完成
    //   console.log(this.handleClick);
    // },
    //    created(){
    //     console.log('------------- created -------------');
    //      console.log(this);
    //      console.log(this.$el); // $el不可见
    //     console.log(this.msg); // 数据观测 (data observer) 和 event/watcher 事件配置完成
    //     console.log(this.handleClick);
    //   },
    //   beforeMount(){
    //     console.log('------------- beforeMount -------------');
    //     console.log(this);
    //     console.log(this.$el); // $el不可见
    //     console.log(this.msg); // 数据观测 (data observer) 和 event/watcher 事件配置完成
    //     console.log(this.handleClick);
    //   },
    //   mounted(){
    //     console.log('------------- mounted -------------');
    //     console.log(this);
    //     console.log(this.$el); // $el创建完成，替代页面的el元素
    //     console.log(this.msg); // 数据观测 (data observer) 和 event/watcher 事件配置完成
    //     console.log(this.handleClick);
    //
    //     this.msg = 111;
    //
    //     this.$on('test', function () {
    //       console.log('自定义事件');
    //     })
    //   },
    //   beforeUpdate(){
    //     console.log('------------- beforeUpdate -------------');
    //     console.log(this);
    //     // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
    //     this.$off('test') // 移除自定义事件
      // },
      // updated(){
      //   console.log('------------- updated -------------');
      //   // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
      // },
      // beforeDestroy(){
      //   console.log('------------- beforeDestory -------------');
      //   // 实例销毁之前调用。在这一步，实例仍然完全可用。通常在这关闭定时器
      //   console.log(this);
      //   console.log(this.$el);
      //   console.log(this.msg);
      //   console.log(this.handleClick);
      // },
      destroyed(){
        debugger
        console.log('------------- destoryed -------------');
        // 实例vm已经销毁，虽然可以可以通过this获取对应的数据，但不是当前组件的数据是当前钩子函数的context
        console.log(this);
        console.log(this.$el);
        console.log(this.msg);
        console.log(this.handleClick);
      }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>