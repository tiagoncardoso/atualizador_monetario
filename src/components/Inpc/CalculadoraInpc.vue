<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="8" offset="2">
                    <v-card class="elevation-12">
                        <v-row>
                            <v-col cols="6">
                                <v-card-title> Informações obrigatória* </v-card-title>
                                <v-row>
                                    <v-col cols="6">
                                        <input-month-year
                                            v-model="mesAno"
                                            label="Início"
                                            outlined
                                            dense
                                            background-color="white"
                                            color="black"
                                            :data-padrao="inicio"
                                        />
                                    </v-col>

                                    <v-col cols="6">
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

                                    <v-row>
                                        <v-col cols="6">
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

                                        <v-col cols="6">
                                            <span>Valor atualizado <br />{{ valorAtual }}</span>
                                        </v-col>
                                    </v-row>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-card-text class="tabela">
                                    <v-row>
                                        <v-col>
                                            <h3>Histórico (Últimos 10 cálculos)</h3>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-col>
                        </v-row>
                        <v-card-actions>
                            <v-col cols="6" offset="8" py-1>
                                <v-btn type="button" class="mr-4" color="primary" @click="calcular()"> Calcular </v-btn>
                                <v-btn type="button" color="error" @click="limpar()"> Limpar </v-btn>
                            </v-col>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
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
            inicio: null,
            fim: 0,
        };
    },
    computed: {
        arrayIndices() {
            return arrayIndices;
        },
    },

    watch: {
        mesAno() {
            this.inicio = null;
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
            if (this.mesAno != null) {
                this.inicio = '';
            }
            this.fim = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
            this.valor = 0;
            this.valorAtual = 0;
        },
    },
};
</script>

<style scoped>
.v-card {
    font-family: 'Numans', sans-serif;
}

.row {
    margin-left: 0;
}

.tabela {
    margin-left: 45px;
    width: 20rem;
    height: 300px;
    border-radius: 5px;
    border-width: 1px;
    border-color: black;
    border-style: solid;
}

.col {
    padding: 10px;
}

.v-btn {
    width: 100px;
}
</style>
