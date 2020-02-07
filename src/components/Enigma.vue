<template>
  <div>
      <h1>Enigma</h1>

    <RollDisplay :rollingMill="rollingMill" class="roll-display" />

    <Keyboard :current-key="pressedKey"></Keyboard>
  </div>
</template>

<script lang="ts">
import Keyboard from '@/components/Keyboard.vue';
import RollDisplay from '@/components/RollDisplay.vue';
import RollingMill from '@/modle/rollingMill';
import {Component, Vue} from 'vue-property-decorator';


@Component({
  components: {
    Keyboard,
    RollDisplay
  }
})
export default class Enigma extends Vue {
  private pressedKey: number  = -1;
   private rollingMill: RollingMill = new RollingMill();

  created() {
    window.addEventListener('keypress', this.keypress);
    window.addEventListener('keyup', this.keyup);
  }


  keypress(event) {
    const keyValue = event.key.toLowerCase().charCodeAt(0) - 97;
    this.pressedKey = this.rollingMill.pressKey(keyValue);
  }

  keyup() {
    this.pressedKey = -1;
  }
}
</script>

<style scoped lang="stylus">
.roll-display{
  margin-bottom 30px;
}
</style>
