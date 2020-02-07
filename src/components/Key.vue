<template>
  <div class="key" v-bind:class="{ active: isActive }">
    {{ key }}
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
      type: Number,
      default: -1
    }
  },
  computed: {
    key() {
      return this.name;
    },
    isActive() {
      return this.key.toLowerCase().charCodeAt(0) - 97 === this.currentKey;
    }
  }
};
</script>

<style scoped lang="stylus">
.key {
  background-color: lightgrey;
  border-radius 50%
  height: 60px
  width: 60px
  color: black;
  font-size: 40px
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
