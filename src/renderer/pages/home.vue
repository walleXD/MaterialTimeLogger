<template lang="pug">
  .home.page
    timer-container
</template>

<script>
  import { TimerContainer } from '../containers'

  export default {
    components: {TimerContainer},
    name: 'HomePage',
    metaInfo: {
      title: 'Timer'
    },
    props: {
      TimerContainer
    }
  }
</script>

<style lang="stylus" scoped></style>
