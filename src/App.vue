<template>
  <v-app>
    <v-main>
      <calculadora-ipca/>
    </v-main>
  </v-app>
</template>

<script>
import CalculadoraIpca from './components/Ipca/CalculadoraIpca.vue'
export default {
  name: 'App',

  components: {
    CalculadoraIpca,
  },

  data: () => ({
    //
  }),
};
</script>
