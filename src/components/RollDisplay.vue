<template>
<div class="roll-display">
  <div class="roll-display__box">
    {{letter3}}
  </div>
  <div class="roll-display__box">
    {{letter2}}
  </div>
  <div class="roll-display__box">
    {{letter1}}
  </div>
</div>
</template>

<script>
export default {
  name: "RollDisplay",
  props: {
    indices: {
      type: Array,
      require: true,
    }
  },
  computed: {
    letter1() {
      return this.indices[0].toChar()
    },
    letter2() {
      return this.indices[1].toChar()
    },
    letter3() {
      return this.indices[2].toChar()
    },
  }
}
</script>

<style scoped lang="stylus">
  .roll-display {
    display: flex


    &__box {
      height: 30px;
      width: 30px;
      box-sizing border-box
      border 1px solid lightgrey;
      font-size: 20px
    }
  }
</style>
