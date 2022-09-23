<template>
    <v-row>
        <v-col v-if="pessoa" cols="8" offset="2">
            <v-img :src="pessoa.avatar" lazy-src="../../assets/logo.png" max-height="150" max-width="80" />
        </v-col>
        <v-col v-if="pessoa" cols="8" offset="2">
            <h5>Bom dia {{ pessoa.last_name }}, {{ pessoa.first_name }}</h5>
        </v-col>
        <v-col cols="8" offset="2">
            <v-card elevation="20" class="blue">
                <v-card-text class="white">
                    <v-row>
                        <v-col cols="8" class="top-line">
                            <v-row>
                                <v-col class="letra">
                                    <h3>Informações Obrigatórias*</h3>
                                </v-col>
                            </v-row>
                            <v-checkbox v-model="checkbox" />
                            <v-row>
                                <v-col v-show="!checkbox" cols="5" sm="5" offset="1">
                                    <p class="letra-pro-rata">Cálculo Normal</p>
                                    <input-month
                                        v-model="dataInicialCalculo"
                                        dense
                                        :min="dataMinimaInputInicial"
                                        :max="dataMaximaInputInicial ? dataMaximaInputInicial : dateToday"
                                        :data-padrao="limpaAno"
                                        label="Início"
                                        outlined
                                    />
                                </v-col>

                                <v-col v-show="!checkbox" cols="5" sm="5" class="margin-topo">
                                    <input-month
                                        v-model="dataFinalCalculo"
                                        dense
                                        :min="dataMinimaInputFinal"
                                        :max="dateToday"
                                        :data-padrao="dateToday"
                                        label="Fim"
                                        outlined
                                    />
                                </v-col>
                                <v-col v-show="checkbox" cols="5" sm="5" offset="1">
                                    <p class="letra-pro-rata">Cálculo Pró-rata</p>
                                    <input-date v-model="proRataInicial" label="Início" />
                                </v-col>
                                <v-col v-show="checkbox" cols="5" sm="5" class="margin-topo">
                                    <input-date v-model="proRataFinal" label="Fim" />
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="5" sm="5" offset="1" class="espaco">
                                    <input-money
                                        v-model="valor"
                                        :valor-padrao="valor"
                                        dense
                                        outlined
                                        label="Digite o Valor"
                                    />
                                </v-col>

                                <v-col cols="5" sm="5">
                                    <span>VALOR ATUALIZADO</span>
                                    <br />
                                    <span class="letraCor">R$ </span>
                                    <span class="letraCor">{{ formataMoeda(result, false) }}</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="4" class="tabela letra">
                            <h4>Histórico (Últimos 10 cálculos)</h4>
                            <hr />
                            <ul>
                                <li v-for="(item, index) in listaHistorico" :key="index">
                                    <span class="letra2">{{ item.mesInicio }} - {{ item.mesFim }}</span>
                                    <span class="letra3">
                                        [ {{ formataMoeda(item.valor) }} -> {{ formataMoeda(item.resultado) }} ]</span
                                    >
                                </li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-row>
                        <v-col v-show="!checkbox" cols="12" class="text-right">
                            <v-btn small class="mr-3" color="primary" @click="calcular()">Calcular</v-btn>
                            <v-btn small color="error" class="mr-3" @click="limpar()">Limpar</v-btn>
                            <v-btn small color="warning" @click="limparHistorico()">Limpar Histórico</v-btn>
                        </v-col>
                        <v-col v-show="checkbox" cols="12" class="text-right">
                            <v-btn small class="mr-3" color="primary" @click="calculoProRata()">Calcular</v-btn>

                            <v-btn small color="warning" @click="limparHistorico()">Limpar Histórico</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-overlay :value="carregando">
            <v-progress-circular indeterminate size="64" />
        </v-overlay>
    </v-row>
</template>

<script>
import InputMonth from '../shared/InputMonth.vue';
import InputMoney from '../shared/InputMoney.vue';
import InputDate from '../shared/InputDate.vue';
import axios from 'axios';

export default {
    name: 'CalculadoraIpca',

    components: {
        InputMonth,
        InputMoney,
        InputDate,
    },

    data() {
        return {
            valor: 0,
            result: 0,
            label: 'valor, result',
            valorPadrao: 0,
            dataInicialCalculo: '',
            dataFinalCalculo: '',
            limpaAno: 0,
            dateToday: '',
            validador: 0,
            historico: [],
            checkbox: false,
            proRataInicial: '',
            proRataFinal: '',
            pessoa: null,
            indice: null,
            carregando: true,
        };
    },

    computed: {
        dataHoje() {
            const dataAtual = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
            return dataAtual;
        },

        listaHistorico() {
            if (this.historico.length > 0) {
                let historicoInvertido = this.historico.reverse();
                return historicoInvertido.slice(0, 10);
            }

            return this.historico;
        },
        dataMinimaInputInicial() {
            return '1994-07';
        },
        dataMaximaInputInicial() {
            if (this.dataFinalCalculo) {
                let [mes, ano] = this.dataFinalCalculo.split('/');
                let dataTemporaria = new Date(ano, mes);
                return `${dataTemporaria.getFullYear()}-${dataTemporaria.getMonth() - 1}`;
            }
            return false;
        },
        dataMinimaInputFinal() {
            if (this.dataInicialCalculo != null) {
                let [mes, ano] = this.dataInicialCalculo.split('/');
                let dataTemporaria = new Date(ano, mes);
                return `${dataTemporaria.getFullYear()}-${dataTemporaria.getMonth() + 1}`;
            }
            return this.dateToday;
        },
    },

    watch: {
        dataInicialCalculo() {
            if (this.limpaAno != 0 && this.validador == 1) {
                this.limpaAno = '';
                this.validador = 0;
            }
        },
        dataFinalCalculo() {
            this.dateToday = this.dataHoje;
        },
    },

    async mounted() {
        this.dateToday = this.dataHoje;
        await this.buscaInfoPessoa(); 
        this.carregando = false
    },

    methods: {
        async calcular(valorProRata = 0, diaInicioParametro, diaFimParametro) {
            this.carregando = true;
            let valorRecebido = this.valor;
            let valorSimulado = this.valor;

            let [mes, ano] = this.dataInicialCalculo.split('/');
            let dataInicio = new Date(ano, parseInt(mes) - 1, 1);

            let [mesFim, anoFim] = this.dataFinalCalculo.split('/');
            let dataFim = new Date(anoFim, parseInt(mesFim) - 1, 1);

            if (valorProRata != 0) {
                valorSimulado = valorProRata;

                dataInicio = new Date(diaInicioParametro);

                dataFim = new Date(diaFimParametro);
                dataFim.setMonth(dataFim.getMonth() - 1);
            }

            await this.buscaIndices(dataInicio.getFullYear(), dataFim.getFullYear());
            let indicesFiltrados = this.indice

            if (dataInicio < dataFim) {
                while (dataInicio < dataFim) {
                    let indicesAno = indicesFiltrados.filter((filtro) => filtro.ano == dataInicio.getFullYear());

                    let indiceMes = indicesAno[0].indices[dataInicio.getMonth()];
                    dataInicio.setMonth(dataInicio.getMonth() + 1);

                    let total = parseFloat(valorSimulado) * (indiceMes / 100) + parseFloat(valorSimulado);
                    valorSimulado = total;
                }
                this.result = valorSimulado;
                valorSimulado = valorRecebido;

                this.acrescentaHistorico(this.dataInicialCalculo, this.dataFinalCalculo, valorSimulado, this.result);
            } else {
                this.carregando = false;
                this.result = '';
            }
            this.carregando = false;
            return this.result;
        },

        limpar() {
            if (this.dataInicialCalculo != null) {
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

        acrescentaHistorico(dataInicialCalculo, dataFinalCalculo, valor, result) {
            this.historico.push({
                mesInicio: dataInicialCalculo,
                mesFim: dataFinalCalculo,
                valor,
                resultado: result,
            });
        },

        formataMoeda(valorNaoFormatado, moeda = true) {
            if (valorNaoFormatado) {
                if (moeda) {
                    return valorNaoFormatado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                }
                return valorNaoFormatado.toLocaleString('pt-br', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                });
            }

            return '0,00';
        },

        limparHistorico() {
            this.historico = [];
        },
        async buscaInfoPessoa() {
            let resposta = await axios.get('https://random-data-api.com/api/v2/users')
            this.pessoa = resposta.data;
        },
        calculoProRata() {
            let [dia, mes, ano] = this.proRataInicial.split('/');
            let dataInicio = new Date(ano, mes - 1, dia);
            let dataDiaMaximoInicio = new Date(ano, mes, 0);
            let diaInicioParametro = new Date(ano, mes, 1);
            let [diaFim, mesFim, anoFim] = this.proRataFinal.split('/');
            let diaFimParametro = new Date(anoFim, mesFim, 1);

            let dataFim = new Date(anoFim, mesFim, diaFim);
            dataFim.setMonth(dataFim.getMonth() - 1);

            let dataDiaMaximoFinal = new Date(anoFim, mesFim, 0);

            let diaSubtraidoIndiceInicial = dataDiaMaximoInicio.getDate() - dataInicio.getDate() + 1;

            let indicesAno = this.indice.filter((filtro) => filtro.ano == ano);
            let indiceMes = indicesAno[0].indices[parseInt(mes) - 1];

            let indiceProRataInicio = parseFloat(indiceMes) / dataDiaMaximoInicio.getDate();
            let indiceProRata = indiceProRataInicio * diaSubtraidoIndiceInicial;
            let valorProRata = parseFloat(this.valor) * (indiceProRata / 100) + parseFloat(this.valor);

            let valorProRataAtualizado = this.calcular(valorProRata, diaInicioParametro, diaFimParametro);

            let indiceAnoFinal = this.indice.filter((filtroFinal) => filtroFinal.ano == anoFim);
            let indiceMesFinal = indiceAnoFinal[0].indices[dataFim.getMonth()];

            let indiceProRataFinal = parseFloat(indiceMesFinal) / dataDiaMaximoFinal.getDate();
            let indiceFinal = indiceProRataFinal * dataFim.getDate();

            this.result = parseFloat(valorProRataAtualizado) * (indiceFinal / 100) + parseFloat(valorProRataAtualizado);
        },
        async buscaIndices(anoInicial = '2000', anoFinal = '2022') {
            let resp = await axios.get(`http://localhost:8000/api/ipca/${anoInicial}/${anoFinal}`);
            this.indice = resp.data;
        },
    },
};
</script>

<style scoped>
.v-btn {
    width: 100px;
    color: #ffff;
}

.white {
    background-color: rgb(255, 255, 255) !important;
}

.blue {
    background-color: #f0f0f0 !important;
}

.tabela {
    border-width: 1px;
    border-color: rgb(139 139 139 / 39%);
    border-style: solid;
    border-radius: 4px;
}

.tabelaFina {
    border-width: 1px;
    outline: 1px solid #8f8989;
    border-color: rgb(163, 150, 150);
    border-radius: 1px;
}
.espaco {
    margin-bottom: 125px;
}
.letra {
    color: black;
}

.letra2 {
    font-size: 10px;
    color: rgb(23, 26, 26);
    margin-right: 10px;
}

.letra3 {
    font-size: 12px;
    color: black;
}

.div-resultado {
    height: 41px;
    background-color: bisque;
}

.letraCor {
    color: black;
}

.margin-topo {
    margin-top: 38px !important;
}

.letra-pro-rata {
    font-size: 16px;
    color: black;
}

.test {
    background-color: black;
}
</style>
