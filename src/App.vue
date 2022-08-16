<template>
  <v-app>
    <v-main>
      <calculadora-ipca/>
      <calculadora-inpc/>
    </v-main>
  </v-app>
</template>

<script>

import CalculadoraIpca from './components/Ipca/CalculadoraIpca.vue'
import CalculadoraInpc from './components/Inpc/CalculadoraInpc.vue';

export default {
  name: 'App',

  components: {
    CalculadoraIpca,
    CalculadoraInpc,
  },

  data: () => ({
    //
  }),
};
</script>
