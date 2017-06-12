import Vue from 'vue'
import Vuetify from 'vuetify'
import { play } from 'vue-play'

import '../src/renderer/styles/app.styl'

Vue.use(Vuetify)

play('MyButton')
  .add('with text', {
    template: `<v-btn @click="$log('123')">Hello</v-btn>`
  })
