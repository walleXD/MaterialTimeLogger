<template lang="pug">
  v-navigation-drawer.grey.lighten-4.pb-0(
    v-model="drawerStatus",
    temporary,
    clipped,
    height="100%",
    light
  )
    v-list

      template(v-for="(item, i) in items")

        v-layout(
          row,
          v-if="item.heading"
          align-center,
          :key="i"
        )
          v-flex(xs6)
            v-subheader(v-if="item.heading", light)
              | {{ item.heading }}

        v-divider.my-4(
          dark,
          v-else-if="item.divider",
          :key="i"
        )

        v-list-item(
          :key="i",
          v-else
        )
          v-list-tile(
            :nuxt="item.nuxt",
            :to="item.to",
            :href="item.href",
            :router="item.router",
            :target="item.target",
            :tag="item.tag"
          )
            v-list-tile-action
              v-icon(v-if="item.icon") {{ item.icon }}
              i.mdi.icon.icon--dark(
                v-else,
                :class="item.m_icon"
              )
            v-list-tile-content
              v-list-tile-title {{ item.text }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data: () => ({
      items: [
        { icon: 'timer', text: 'Timer', to: '/', router: true },
        { divider: 'true' },
        { heading: 'Social' },
        {
          m_icon: 'mdi-facebook',
          text: 'Facebook',
          href: '',
          target: '__blank'
        }
      ]
    }),
    methods: {
      ...mapActions(['setDrawerStatus'])
    },
    computed: {
      ...mapGetters(['isDrawerOpen']),
      drawerStatus: {
        get () {
          return this.isDrawerOpen
        },
        set (value) {
          this.setDrawerStatus(value)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  a
    text-decoration none
</style>
