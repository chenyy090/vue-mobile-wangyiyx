<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  #app
    width 100%
    height 100%
</style>
