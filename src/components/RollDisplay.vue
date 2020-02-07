<template>
  <div class="roll-display">
    <div
      class="roll-display__box"
      v-for="(letter, index) in letterBoxes"
      :key="index"
    >
      {{ letter }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RollDisplay extends Vue {
  @Prop({ required: true }) private letterBoxes!: string[];
}
</script>

<style scoped lang="stylus">
.roll-display {
  display: flex


  &__box {
    height: 60px;
    width: 60px;
    box-sizing border-box
    border 1px solid lightgrey;
    font-size: 40px
  }
}
</style>
