<template>
<div class="key" v-bind:class="{ active: isActive }">
  {{ key }}
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Key extends Vue {
  @Prop({required: true}) private name!: string;
  @Prop({required: true}) private currentKey: number = -1;

  get isActive() {
    return this.key.toLowerCase().charCodeAt(0) - 97 === this.currentKey;
  }

  get key(): string {
    return this.name
  }
}
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
