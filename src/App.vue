<template>
    <v-app>
        <v-main>
            <v-toolbar color="#13335C" dark flat>
                <v-toolbar-title>Atualização monetária</v-toolbar-title>

                <template #extension>
                    <v-tabs v-model="currentItem" fixed-tabs slider-color="white">
                        <v-tab href="#tabIpca"> IPCA (IBGE) </v-tab>
                        <v-tab href="#tabInpc"> INPC (IBGE) </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>

            <v-tabs-items v-model="currentItem">
                <v-tab-item value="tabIpca">
                    <calculadora-ipca />
                </v-tab-item>
                <v-tab-item value="tabInpc">
                    <calculadora-inpc />
                </v-tab-item>
            </v-tabs-items>
        </v-main>
    </v-app>
</template>

<script>
import CalculadoraInpc from './components/Inpc/CalculadoraInpc.vue';
import CalculadoraIpca from './components/Ipca/CalculadoraIpca.vue';

export default {
    name: 'App',
    components: { CalculadoraIpca, CalculadoraInpc },
    data: () => ({
        currentItem: 'tab-Web',
    }),
};
</script>
