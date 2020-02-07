<template>
<div class="roll-display">
  <div class="roll-display__box">
    {{ letter3 }}
  </div>
  <div class="roll-display__box">
    {{ letter2 }}
  </div>
  <div class="roll-display__box">
    {{ letter1 }}
  </div>
</div>
</template>

<script lang="ts">

import RollingMill from '@/modle/rollingMill';
import {intToChar} from '@/util';
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class RollDisplay extends Vue {
  @Prop({required: true}) private rollingMill!: RollingMill;

  get letter1() {
    return intToChar(this.rollingMill.roll1Index)
  }

  get letter2() {
    return intToChar(this.rollingMill.roll2Index)
  }

  get letter3() {
    return intToChar(this.rollingMill.roll3Index)
  }
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
