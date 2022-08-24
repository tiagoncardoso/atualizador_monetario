<template>
    <v-container>
        <v-row>
            <v-col cols="4" class="mt-10 offset-4 text-center input-group form-group mb-3">
                <v-card class="elevation-12" color="#98C0D6">
                    <v-toolbar dark color="#144E73" class="text-center mb-4">
                        <v-toolbar-title> Atualização monetária- INPC </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-row>
                                <v-col cols="6" offset="3">
                                    <input-month-year
                                        v-model="mesAno"
                                        label="Início"
                                        outlined
                                        dense
                                        background-color="white"
                                        color="black"
                                        :data-padrao="inicio"
                                    />
                                    <input-month-year
                                        v-model="final"
                                        label="Final"
                                        outlined
                                        dense
                                        background-color="white"
                                        color="black"
                                        :data-padrao="fim"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6" offset="3">
                                    <input-money
                                        v-model="valor"
                                        label="Valor"
                                        outlined
                                        dense
                                        background-color="white"
                                        color="black"
                                        :valor-padrao="valor"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-btn type="button" class="mr-3" color="primary" @click="calcular()">
                                        Calcular
                                    </v-btn>
                                    <v-btn type="button" color="error" @click="limpar()"> Limpar </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6" offset="3">
                                    <input-money
                                        v-model="valorAtual"
                                        label="Valor atualizado"
                                        outlined
                                        clearable
                                        dense
                                        readonly
                                        background-color="white"
                                        color="black"
                                        :valor-padrao="valorAtual"
                                    />
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { arrayIndices } from './Inpc';
import InputMonthYear from '../shared/InputMonth.vue';
import InputMoney from '../shared/InputMoney.vue';

export default {
    name: 'CalculadoraInpc',
    components: { InputMonthYear, InputMoney },
    data() {
        return {
            mesAno: '',
            final: '',
            valor: 0,
            valorAtual: 0,
            inicio: 0,
            fim: 0,
        };
    },
    computed: {
        arrayIndices() {
            return arrayIndices;
        },
    },

    mounted() {
        this.fim = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
    },

    methods: {
        calcular() {
            let resultado = this.valor;
            let [mes, ano] = this.mesAno.split('/');
            let dataInicio = new Date(ano, Number.parseInt(mes) - 1, 1);

            [mes, ano] = this.final.split('/');
            let dataFim = new Date(ano, Number.parseInt(mes) - 1, 1);

            if (dataInicio < dataFim) {
                while (dataInicio < dataFim) {
                    let indicesAno = arrayIndices.filter((lista) => lista.ano == dataInicio.getFullYear());
                    let indicesMes = indicesAno[0].indice[dataInicio.getMonth()];

                    dataInicio.setMonth(dataInicio.getMonth() + 1);
                    let total = parseFloat(this.valor) * (indicesMes / 100) + parseFloat(this.valor);
                    this.valor = total;
                }
                this.valorAtual = this.valor;
                this.valor = resultado;
            } else {
                this.valorAtual = 0;
            }
        },
        limpar() {
            this.inicio = '';
            this.fim = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
            this.valor = 0;
            this.valorAtual = 0;
        },
    },
};
</script>

<style scoped>
.v-card {
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Numans', sans-serif;
}

.v-btn {
    width: 100px;
}

template {
    background: #e3f2fd;
}
</style>
