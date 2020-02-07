<template>
  <div>
    <h1>EnigmaMachine</h1>

    <RollDisplay :letter-boxes="displayedLetters" class="roll-display" />

    <Keyboard :current-key="pressedKey"></Keyboard>
  </div>
</template>

<script lang="ts">
import Keyboard from "@/components/Keyboard.vue";
import RollDisplay from "@/components/RollDisplay.vue";
import EnigmaMachine from "@/model/EnigmaMachine";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {
        Keyboard,
        RollDisplay
    }
})
export default class Enigma extends Vue {
  @Prop({ required: true }) private machine!: EnigmaMachine;

  get pressedKey(): number {
      return this.machine.pressedKey;
  }

  get displayedLetters(): string[] {
      return this.machine.displayedLetters;
  }
}
</script>

<style scoped lang="stylus">
.roll-display {
  margin-bottom 30px;
}
</style>
