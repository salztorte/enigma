<template>
<div>
  <GlobalEvents @keypress="keypress($event)" @keyup="keyup" />
<!--  <h1>Enigma</h1>-->

  <RollDisplay :indices="rollingMill.index" class="roll-display"/>

<!--  <Keyboard :current-key="pressedKey"></Keyboard>-->
</div>
</template>

<script>
//import Keyboard from './Keyboard'
import RollDisplay from './RollDisplay'
import {RollingMill} from '../stuff/rolls'

export default {
  name: "Enigma",
  components: {
    //Keyboard,
    RollDisplay,
  },
  data() {
    return {
      pressedKey: '',
      test: 0,
      rollingMill: new RollingMill(),
    }
  },
  methods: {
    keypress(event) {
      this.rollingMill.next();
      this.pressedKey = event.key;
    },
    keyup() {
      this.pressedKey = '';
    }
  }
}
</script>

<style scoped lang="stylus">
  .roll-display{
    margin-bottom 30px;
  }
</style>




