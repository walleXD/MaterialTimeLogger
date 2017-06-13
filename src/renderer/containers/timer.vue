<template lang="pug">
  v-card(height="100px")
    count-down-timer
</template>

<script>
  import { CountDownTimer } from '../components'
  export default {
    name: 'TimerContainer',
    components: {
      CountDownTimer
    }
  }
</script>

<style lang="stylus" scoped>

</style>
