<template lang="pug">
  v-app
    app-drawer
    app-bar
    main: v-container(fluid): router-view
    v-footer.app-footer
      a(href="http://asterixmedia.com") Asterix* Designs
      v-spacer
      span Material Toggl © {{ new Date().getFullYear() }}
</template>

<script>
  import { AppBar, AppDrawer } from '../components'

  export default {
    name: 'DefaultLayout',
    components: {
      AppBar,
      AppDrawer
    }
  }
</script>

<style lang="stylus">
  .app-footer > a
    text-decoration none
    color white
</style>
