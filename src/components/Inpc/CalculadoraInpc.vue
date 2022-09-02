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
                                            <span style="font-size: 13px">VALOR ATUALIZADO</span><br />
                                            <span style="font-size: 14px"><strong>R$ </strong></span>
                                            <span style="font-size: 16px">
                                                <strong>{{ formataMoeda(valorAtual, false) }}</strong></span
                                            >
                                        </v-col>
                                    </v-row>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-card-text class="tabela">
                                    <v-row>
                                        <v-col>
                                            <h3>
                                                Histórico (Últimos 10 cálculos)
                                                <hr />
                                            </h3>
                                            <ol>
                                                <li v-for="(item, index) in listaHistorico" :key="index">
                                                    <span style="margin-right: 25px">
                                                        {{ item.inicio }} - {{ item.fim }}
                                                    </span>
                                                    <span>
                                                        [{{ formataMoeda(item.valor) }} ->
                                                        {{ formataMoeda(item.resultado) }}]
                                                    </span>
                                                </li>
                                            </ol>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-col>
                        </v-row>
                        <v-card-actions>
                            <v-col cols="6" offset="8" py-1>
                                <v-btn small type="button" class="mr-4" color="primary" @click="calcular()">
                                    Calcular
                                </v-btn>
                                <v-btn small type="button" color="error" @click="limpar()"> Limpar </v-btn>
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
    },

    watch: {
        mesAno() {
            this.inicio = null;
        },
        final() {
            this.fim = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
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

                this.acrescentaHistorico(this.mesAno, this.final, this.valor, this.valorAtual);
            } else {
                this.valorAtual = 0;
            }
        },
        limpar() {
            if (this.mesAno != null) {
                this.inicio = '';
            }
            this.fim = '';
            this.valor = 0;
            this.valorAtual = 0;
        },
        acrescentaHistorico(mesAno, final, valor, valorAtual) {
            this.historico.push({
                inicio: mesAno,
                fim: final,
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
