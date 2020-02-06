<template>
<div>
  <GlobalEvents @keypress="keypress($event)" @keyup="keyup"/>
  <h1>Enigma</h1>

  <Keyboard :current-key="pressedKey"></Keyboard>
</div>
</template>

<script>
import Keyboard from './Keyboard'
import {roll_1} from '../stuff/rolls'

export default {
  name: "Enigma",
  components: {
    Keyboard
  },
  data() {
    return {
      pressedKey: '',
    }
  },
  methods: {
    keypress(event) {
      this.pressedKey = roll_1.result(event.key);
    },
    keyup() {
      this.pressedKey = '';
    }
  }
}
</script>

<style scoped lang="stylus">

</style>




