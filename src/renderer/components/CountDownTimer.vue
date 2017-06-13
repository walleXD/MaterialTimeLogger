<template lang="pug">
  .count-down-timer
    v-progress-circular.teal--text(
      :size="300",
      :width="50",
      :rotate="360",
      :value="value"
    ): span {{ value }}
</template>

<script>
  export default {
    name: 'CountDownTimer',
    props: {
      value: {
        type: Number,
        default: 30
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .count-down-timer
    display flex
  span
    font-size 6em
</style>
