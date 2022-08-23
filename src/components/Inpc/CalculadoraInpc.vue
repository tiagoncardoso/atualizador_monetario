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
                                    />
                                    <input-month-year
                                        v-model="final"
                                        label="Final"
                                        outlined
                                        dense
                                        background-color="white"
                                        color="black"
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
    <!--{{ valores [2022][0]}}-->
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
            carregando: false,
            valor: 0,
            valorAtual: 0,
            final: '',
        };
    },
    computed: {
        arrayIndices() {
            return arrayIndices;
        },
    },

    methods: {
        calcular() {
            let temp = this.mesAno.split('/');
            let data = [parseInt(temp[0]), parseInt(temp[1])];
            let dataInicio = new Date(data);
            console.log(dataInicio);

            let tempo = this.final.split('/');
            let dat = [parseInt(tempo[0]), parseInt(tempo[1])];
            let dataFim = new Date(dat);
            console.log(dataFim);

            while (dataInicio < dataFim) {
                let indicesAno = arrayIndices.filter((lista) => lista.ano == dataInicio.getFullYear());
                let indicesMes = indicesAno[0].indice[dataInicio.getMonth()];

                dataInicio.setMonth(dataInicio.getMonth() + 1);
                let total = parseFloat(this.valor) * (indicesMes / 100) + parseFloat(this.valor);
                this.valor = total;
                console.log(indicesMes);
            }
            this.valorAtual = this.valor;
        },
    },
    limpar() {
        this.data = '';
        this.valor = 0;
        this.valorAtual = 0;
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
