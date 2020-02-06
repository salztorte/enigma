<template>
<div class="key" v-bind:class="{active: isActive}">
  {{key}}
</div>
</template>

<script>
export default {
  name: "Key",
  props: {
    name: {
      type: String,
      required: true
    },
    currentKey: {
      type: String,
      default: ''
    }
  },
  computed: {
    key() {
      return this.name;
    },
    isActive() {
      return this.key.toUpperCase() === this.currentKey.toUpperCase();
    }
  }
};
</script>

<style scoped lang="stylus">
  .key {
    background-color: lightgrey;
    border-radius 50%
    height: 40px
    width: 40px
    color: black;
    font-size: 25px
    font-weight bolder;
    text-transform capitalize;
    display: flex
    justify-content: center
    align-items: center;
  }

  .active {
    background-color: yellow;
  }

</style>
