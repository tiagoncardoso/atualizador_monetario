<template>
    <v-app>
        <v-main>
            <v-toolbar color="#757575" dark>
                <v-toolbar-title>CALCULADORA DE ATUALIZAÇÃO MONETÁRIA</v-toolbar-title>
                <template #extension>
                    <v-tabs v-model="currentItem" fixed-tabs slider-color="white" background-color="#1867C0" pt-5>
                        <v-tab href="#tabIpca"> IPCA (IBGE) </v-tab>
                        <v-tab href="#tabInpc"> INPC (IBGE) </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>

            <v-tabs-items v-model="currentItem">
                <v-tab-item value="tabIpca">
                    <calculadora-ipca calculadora="ipca"/>
                </v-tab-item>
                <v-tab-item value="tabInpc">
                    <calculadora-ipca calculadora="inpc"/>
                </v-tab-item>
            </v-tabs-items>
        </v-main>
    </v-app>
</template>

<script>
import CalculadoraIpca from '@/components/Ipca/CalculadoraIpca.vue';

export default {
    name: 'CalculadoraPage',
    components: { CalculadoraIpca },
    data: () => ({
        currentItem: 'tab-Web',
    }),
    methods: {
    }
};
</script>

<style scoped>
div.v-toolbar__title {
    margin: auto;
    font-size: 25px;
}
</style>
