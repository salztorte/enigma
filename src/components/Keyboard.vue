<template>
  <div class="keyboard">
    <div class="keyboard__row">
      <Key name="q" :current-key="currentKey" />
      <Key name="w" :current-key="currentKey" />
      <Key name="e" :current-key="currentKey" />
      <Key name="r" :current-key="currentKey" />
      <Key name="t" :current-key="currentKey" />
      <Key name="z" :current-key="currentKey" />
      <Key name="u" :current-key="currentKey" />
      <Key name="i" :current-key="currentKey" />
      <Key name="o" :current-key="currentKey" />
    </div>
    <div class="keyboard__row keyboard__row--second">
      <Key name="a" :current-key="currentKey" />
      <Key name="s" :current-key="currentKey" />
      <Key name="d" :current-key="currentKey" />
      <Key name="f" :current-key="currentKey" />
      <Key name="g" :current-key="currentKey" />
      <Key name="h" :current-key="currentKey" />
      <Key name="j" :current-key="currentKey" />
      <Key name="k" :current-key="currentKey" />
    </div>
    <div class="keyboard__row">
      <Key name="p" :current-key="currentKey" />
      <Key name="y" :current-key="currentKey" />
      <Key name="x" :current-key="currentKey" />
      <Key name="c" :current-key="currentKey" />
      <Key name="v" :current-key="currentKey" />
      <Key name="b" :current-key="currentKey" />
      <Key name="n" :current-key="currentKey" />
      <Key name="m" :current-key="currentKey" />
      <Key name="l" :current-key="currentKey" />
    </div>
  </div>
</template>

<script lang="ts">
import Key from "@/components/Key.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {
        Key
    }
})
export default class Keyboard extends Vue {
  @Prop({ default: -1 }) private currentKey: number = -1;
}
</script>

<style scoped lang="stylus">
.keyboard {
  &__row {
    display flex;
    margin-left -20px
    margin-bottom: 25px

    & * {
      margin-left: 20px
    }

    &--second {
      margin-left 20px
    }
  }
}
</style>
