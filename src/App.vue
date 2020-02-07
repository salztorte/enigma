<template>
<div id="app">
  <Enigma :machine="machine"/>
</div>
</template>

<script lang="ts">
import Enigma from '@/components/Enigma.vue';
import EnigmaMachine from '@/module/EnigmaMachine';
import PlugBoard from '@/module/PlugBoard';
import RollingMill from '@/module/RollingMill';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    Enigma,
  }
})
export default class App extends Vue {
  private machine: EnigmaMachine = new EnigmaMachine();

}
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
</style>
