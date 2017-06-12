<template lang="pug">
  #app
    router-view
</template>

<script>
  export default {
    name: 'MaterialTimeLogger',
    metaInfo: {
      titleTemplate: '%s - Material Time Logger', // title is now "My Example App - Yay!"
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
</script>

<style lang="stylus">
  @import "styles/app.styl"
</style>
