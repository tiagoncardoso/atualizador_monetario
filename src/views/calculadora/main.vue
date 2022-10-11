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
    components: { CalculadoraPrincipal},
    data: () => ({
        currentItem: 'tab-Web',
    }),
    methods: {
    }
};
</script>

<style scoped>
.principal{
    margin-top: 50px !important;
}
</style>
