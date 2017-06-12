<template lang="pug">
  v-toolbar(fixed, light)
    v-toolbar-side-icon(
      light,
      @click.native.stop="toggleDrawerStatus")
    v-toolbar-title Title
    v-spacer
    v-btn(icon, light, disabled): v-icon search
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'AppBar',
    methods: {
      ...mapActions([
        'toggleDrawerStatus'
      ])
    }
  }
</script>

<style lang="stylus" scoped></style>
