<template>
  <div>
    <GlobalEvents @keypress="keypress($event)" @keyup="keyup" />
    <!--  <h1>Enigma</h1>-->

      <RollDisplay :rollingMill="rollingMill" class="roll-display"/>

    <Keyboard :current-key="pressedKey"></Keyboard>
  </div>
</template>

<script>
import Keyboard from "./Keyboard";
import RollDisplay from "./RollDisplay";
import { RollingMill, roll_1 } from "../modle/rolls";

export default {
  name: "Enigma",
  components: {
    Keyboard,
    RollDisplay
  },
  data() {
    return {
      pressedKey: -1,
      test: 0,
      rollingMill: new RollingMill(),
      roll: roll_1
    };
  },
  methods: {
    keypress(event) {
      const keyValue = event.key.toLowerCase().charCodeAt(0) - 97;
      this.pressedKey = this.rollingMill.pressKey(keyValue);
    },
    keyup() {
      this.pressedKey = -1;
    }
  }
};
</script>

<style scoped lang="stylus">
.roll-display{
  margin-bottom 30px;
}
</style>
