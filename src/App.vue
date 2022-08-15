<template>
  <v-app>
    <v-main>
    <calculadora-inpc/>
    </v-main>
  </v-app>
</template>

<script>
import CalculadoraInpc from './components/Inpc/CalculadoraInpc.vue';

export default {
  name: 'App',

  components: {
    CalculadoraInpc,
  },

  data: () => ({
    //
  }),
};
</script>
