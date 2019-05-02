<template>
  <div id="app">
    <div>PWA test</div>
    <img src="./../static/img/PWA.png" style="width:100%">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="sass">
</style>
