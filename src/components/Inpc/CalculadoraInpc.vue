<template>
    <v-row>
        <v-col cols="8" offset="2">
            <v-card elevation="20">
                <v-card-text class="white">
                    <v-row>
                        <v-col cols="8">
                            <v-row>
                                <v-col class="mb-4 mt-8" style="color: black">
                                    <h3>Informações Obrigatórias*</h3>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="5" sm="5" offset="1">
                                    <input-month-year
                                        v-model="dataInicialCalculo"
                                        label="Início"
                                        outlined
                                        dense
                                        :data-padrao="inicio"
                                        :min="minDate"
                                        :max="dataMaxima"
                                    />
                                </v-col>

                                <v-col cols="5" sm="5">
                                    <input-month-year
                                        v-model="dataFinal"
                                        label="Final"
                                        outlined
                                        dense
                                        background-color="white"
                                        color="black"
                                        :data-padrao="fim"
                                        :min="dataMinimaInput"
                                        :max="fim"
                                    />
                                </v-col>
                            </v-row>
                            <v-row class="mb-16">
                                <v-col cols="5" sm="5" offset="1">
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

                                <v-col cols="5" sm="5">
                                    <span style="font-size: 13px">VALOR ATUALIZADO</span><br />
                                    <span style="font-size: 14px"><strong>R$ </strong></span>
                                    <span style="font-size: 16px">
                                        <strong>{{ formataMoeda(valorAtual, false) }}</strong></span
                                    >
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="4" class="tabela">
                            <h4>Histórico (Últimos 10 cálculos)</h4>
                            <hr />
                            <ol>
                                <li v-for="(item, index) in listaHistorico" :key="index">
                                    <span class="mr-3" style="font-size: 10px">{{ item.inicio }} - {{ item.fim }}</span>
                                    <span style="font-size: 12px">
                                        [ {{ formataMoeda(item.valor) }} -> {{ formataMoeda(item.resultado) }} ]</span
                                    >
                                </li>
                            </ol>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-row>
                        <v-col cols="12" class="text-right">
                            <v-btn small class="mr-3" color="primary" @click="calcular()">Calcular</v-btn>
                            <v-btn small color="error" class="mr-3" @click="limpar()">Limpar</v-btn>
                            <v-btn small class="amarelo" color="warning" @click="limparHistorico()">Limpar Histórico</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
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
            dataInicialCalculo: '',
            dataFinal: '',
            valor: 0,
            valorAtual: 0,
            inicio: null,
            fim: 0,
            historico: [],
        };
    },
    computed: {
        arrayIndices() {
            return arrayIndices;
        },

        listaHistorico() {
            if (this.historico.length > 0) {
                let historicoInvertido = this.historico.reverse();
                return historicoInvertido.slice(0, 10);
            }
            return this.historico;
        },

        minDate() {
            return '1994-07';
        },

        dataMaxima() {
            if (this.dataInicialCalculo < this.dataFinal) {
                let [mes, ano] = this.dataFinal.split('/');
                let dataFormatada = new Date(ano, mes - 1, 1);

                dataFormatada.setMonth(dataFormatada.getMonth() + 1);

                return dataFormatada.getFullYear() + '-' + dataFormatada.getMonth();
            } else {
                return '';
            }
        },

        dataMinimaInput() {
            if (this.dataInicialCalculo < this.dataFinal) {
                let [mes, ano] = this.dataInicialCalculo.split('/');
                let dataFormatada = new Date(ano, mes);

                dataFormatada.setMonth(dataFormatada.getMonth() + 1);

                return dataFormatada.getFullYear() + '-' + dataFormatada.getMonth();
            } else {
                return this.dataFinal;
            }
        },
    },

    watch: {
        dataInicialCalculo() {
            this.inicio = null;
        },
        dataFinal() {
            this.fim = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
        },
    },

    mounted() {
        this.fim = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
    },

    methods: {
        calcular() {
            let resultado = this.valor;
            let [mes, ano] = this.dataInicialCalculo.split('/');
            let dataInicio = new Date(ano, Number.parseInt(mes) - 1, 1);

            [mes, ano] = this.dataFinal.split('/');
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

                this.acrescentaHistorico(this.dataInicialCalculo, this.dataFinal, this.valor, this.valorAtual);
            } else {
                this.valorAtual = 0;
            }
        },
        limpar() {
            if (this.dataInicialCalculo != null) {
                this.inicio = '';
            }
            this.fim = '';
            this.valor = 0;
            this.valorAtual = 0;
        },
        limparHistorico() {
            this.historico = [];
        },
        acrescentaHistorico(dataInicialCalculo, dataFinal, valor, valorAtual) {
            this.historico.push({
                inicio: dataInicialCalculo,
                fim: dataFinal,
                valor,
                resultado: valorAtual,
            });
        },
        formataMoeda(valorNaoFormatado, moeda = true) {
            if (valorNaoFormatado) {
                if (moeda) {
                    return valorNaoFormatado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                } else {
                    return valorNaoFormatado.toLocaleString('pt-br', {
                        style: 'decimal',
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                    });
                }
            }

            return '0,00';
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
    border-width: 1px;
    outline: 1px solid #8f8989;
    border-color: rgb(163, 150, 150);
    border-radius: 1px;
    color: black;
}

.col {
    padding: 10px;
}

.v-btn {
    width: 135px;
}
</style>
