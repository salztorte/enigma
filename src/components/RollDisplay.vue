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

<script>
export default {
  name: "RollDisplay",
  props: {
    rollingMill: {
      type: Object,
      require: true
    }
  },
  computed: {
    letter1() {
      return this.rollingMill.roll1.index.toChar()
    },
    letter2() {
      return this.rollingMill.roll2.index.toChar()
    },
    letter3() {
      return this.rollingMill.roll3.index.toChar()
    }
  }
};
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
