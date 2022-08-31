<template>
    <v-container class='blue'>
        <v-card>
            <v-row>
                <v-col cols="10" offset="1">
                    <v-row class="blue">
                        <v-col cols="8">
                            <v-card-title>Inforamção obrigatória</v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="4" sm="4" offset="2">
                                        <input-month
                                            v-model="mesAno"
                                            dense
                                            :data-padrao="limpaAno"
                                            label="Início"
                                            outlined
                                        />
                                    </v-col>

                                    <v-col cols="4" sm="4">
                                        <input-month
                                            v-model="fimMesAno"
                                            dense
                                            :data-padrao="dateToday"
                                            label="Fim"
                                            outlined
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4" sm="4" offset="2">
                                        <input-money
                                            v-model="valor"
                                            :valor-padrao="valor"
                                            dense
                                            outlined
                                            label="Digite o Valor"
                                        />
                                    </v-col>

                                    <v-col cols="4" sm="4">
                                        <input-money
                                            v-model="result"
                                            outlined
                                            clearable
                                            dense
                                            readonly
                                            :valor-padrao="result"
                                            label="Resultado"
                                        />
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-col>
                        <v-col cols="4">
                            <v-card-text class="tabela">
                                <p>ODSA</p>
                                <p>50</p>
                                <p>5050</p>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col offset="8">
                    <v-card-actions>
                        <v-btn class="separar" color="primary mr-3" @click="calcular()">Calcular</v-btn>
                        <v-btn color="error" @click="limpar()">Limpar</v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import { indices } from './Ipca';
import InputMonth from '../shared/InputMonth.vue';
import InputMoney from '../shared/InputMoney.vue';

export default {
    name: 'CalculadoraIpca',

    components: {
        InputMonth,
        InputMoney,
    },

    data() {
        return {
            valor: 0,
            result: 0,
            label: 'valor, result',

            valorPadrao: 0,
            mesAno: '',
            fimMesAno: '',
            limpaAno: 0,
            dateToday: '',
            validador: 0,
        };
    },

    computed: {
        indices() {
            return indices;
        },

        dataHoje() {
            const dataAtual = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
            return dataAtual;
        },
    },

    watch: {
        mesAno() {
            if (this.limpaAno != 0 && this.validador == 1) {
                this.limpaAno = '';
                this.validador = 0;
            }
        },
        fimMesAno() {
            this.dateToday = this.dataHoje;
        },
    },

    mounted() {
        this.dateToday = this.dataHoje;
    },

    methods: {
        calcular() {
            let valorRecebido = this.valor;

            let [mes, ano] = this.mesAno.split('/');
            let dataInicio = new Date(ano, parseInt(mes) - 1, 1);

            let [mesFim, anoFim] = this.fimMesAno.split('/');
            let dataFim = new Date(anoFim, parseInt(mesFim) - 1, 1);

            if (dataInicio < dataFim) {
                while (dataInicio < dataFim) {
                    let indiceAno = this.indices.filter((temp) => temp.ano == dataInicio.getFullYear());
                    let indiceMes = indiceAno[0].indices[dataInicio.getMonth()];
                    dataInicio.setMonth(dataInicio.getMonth() + 1);

                    let total = parseFloat(this.valor) * (indiceMes / 100) + parseFloat(this.valor);
                    this.valor = total;
                }
                this.result = this.valor;
                this.valor = valorRecebido;
            } else {
                this.result = '';
            }
        },

        limpar() {
            if (this.mesAno != null) {
                this.validador = 1;
                this.limpaAno = null;
            } else {
                this.validador = 0;
                this.limpaAno = '';
            }
            this.valor = 0;
            this.result = 0;
            this.dateToday = '';
        },
    },
};
</script>

<style scoped>
.v-btn {
    width: 100px;
    color: #ffff;
}

.row {
    background: #e3f2fd !important;
}
.red {
    background-color: red !important;
}

.blue {
    background-color: blue !important;
}

.tabela {
    border-width: 1px;
    border-color: black;
    border-style: solid;
}

.v-card {
    box-shadow: black;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
