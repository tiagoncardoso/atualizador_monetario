<template>
    <v-app>
        <v-main class="principal">
            <calculadora-principal />
        </v-main>
    </v-app>
</template>

<script>
import CalculadoraPrincipal from '@/components/calculadora/CalculadoraPrincipal.vue';

export default {
    name: 'CalculadoraPage',
    components: { CalculadoraPrincipal },
    data: () => ({}),
};
</script>

<style scoped>
.principal {
    margin-top: auto !important;
    padding: 50px 0px 0px 0px !important;
}
</style>
