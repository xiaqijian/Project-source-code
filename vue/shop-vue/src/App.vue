<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import { getShopDis } from './util/changedata.js'

export default {
  name: 'app'
  
}
</script>

<style>
#app {
  
}
</style>
