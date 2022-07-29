<template>
  <div id="app">
    <calculadora-ipca />
  </div>
</template>

<script>

import CalculadoraIpca from './components/Ipca/CalculadoraIpca.vue'
import CalculadoraInpc from './components/Inpc/CalculadoraInpc.vue'


export default {
  name: 'App',
  components: {
    CalculadoraIpca,
    CalculadoraInpc,
  }
}
</script>

<style>

</style>
