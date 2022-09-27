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
                                <v-col v-if="!null" cols="12" style="color: black">
                                    <h3>Dados pessoais</h3>
                                    <p>
                                        <v-img max-width="60" :src="pessoa.avatar" lazy-src="../../assets/logo.png"/> 
                                        Seja bem-vindo(a),{{
                                            pessoa.first_name
                                        }}
                                        {{ pessoa.last_name }}. <br />
                                        Telefone: {{ pessoa.phone_number }} <br />
                                        E-mail: {{ pessoa.email }}
                                    </p>
                                </v-col>
                                <v-col cols="12">
                                    <v-checkbox
                                        v-model="calculoProRata"
                                        label="Utilizar cálculo de atualização pró-rata"
                                    />
                                </v-col>
                            </v-row>
                            <v-row v-show="!calculoProRata">
                                <v-col cols="5" sm="5" offset="1">
                                    <input-month-year
                                        v-model="dataInicialCalculo"
                                        label="Início"
                                        outlined
                                        dense
                                        :data-padrao="inicio"
                                        :min="dataMinimaInputInicial"
                                        :max="dataMaximaInputInicial"
                                    />
                                </v-col>

                                <v-col cols="5" sm="5">
                                    <input-month-year
                                        v-model="dataFinalCalculo"
                                        label="Final"
                                        outlined
                                        dense
                                        background-color="white"
                                        color="black"
                                        :data-padrao="fim"
                                        :min="dataMinimaInputFinal"
                                        :max="fim"
                                    />
                                </v-col>
                            </v-row>
                            <v-row v-show="calculoProRata">
                                <v-col cols="5" sm="5" offset="1">
                                    <input-date
                                        v-model="dataInicialProRata"
                                        label="Início"
                                        outlined
                                        dense
                                        :data-padrao="inicio"
                                        :min="dataMinimaInputInicial"
                                        :max="dataMaximaInputInicial"
                                    />
                                </v-col>

                                <v-col cols="5" sm="5">
                                    <input-date
                                        v-model="dataFinalProRata"
                                        label="Final"
                                        outlined
                                        dense
                                        background-color="white"
                                        color="black"
                                        :data-padrao="fim"
                                        :min="dataMinimaInputFinal"
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
                    <v-row v-show="!calculoProRata">
                        <v-col cols="12" class="text-right">
                            <v-btn small class="mr-3" color="primary" @click="calcular()">Calcular</v-btn>
                            <v-btn small color="error" class="mr-3" @click="limpar()">Limpar</v-btn>
                            <v-btn small class="amarelo" color="warning" @click="limparHistorico()"
                            >Limpar Histórico</v-btn
                            >
                        </v-col>
                    </v-row>
                    <v-row v-show="calculoProRata">
                        <v-col cols="12" class="text-right">
                            <v-btn small class="mr-3" color="primary" @click="calcularProRata()">Calcular</v-btn>
                            <v-btn small color="error" class="mr-3" @click="limpar()">Limpar</v-btn>
                            <v-btn small class="amarelo" color="warning" @click="limparHistorico()"
                            >Limpar Histórico</v-btn
                            >
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
import InputMonthYear from '../shared/InputMonth.vue';
import InputMoney from '../shared/InputMoney.vue';
import InputDate from '../shared/InputDate.vue';
import axios from 'axios';

export default {
    name: 'CalculadoraInpc',
    components: { InputMonthYear, InputMoney, InputDate },
    data() {
        return {
            dataInicialCalculo: '',
            dataFinalCalculo: '',
            valor: 0,
            valorAtual: 0,
            inicio: null,
            fim: 0,
            historico: [],
            calculoProRata: false,
            dataInicialProRata: '',
            dataFinalProRata: '',
            pessoa: {},
            dados: {},
            finalProRata: 0,
            carregando: true,
        };
    },
    computed: {

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
            let [mes, ano] = this.dataFinalCalculo.split('/');
            let dataFormatada = new Date(ano, mes - 1, 1);

            return dataFormatada.getFullYear() + '-' + dataFormatada.getMonth();
        },

        dataMinimaInputFinal() {
            if (this.dataInicialCalculo) {
                let [mes, ano] = this.dataInicialCalculo.split('/');
                let dataFormatada = new Date(ano, mes);

                dataFormatada.setMonth(dataFormatada.getMonth() + 1);

                return dataFormatada.getFullYear() + '-' + dataFormatada.getMonth();
            } else {
                return '1994-08';
            }
        },

        dataHoje() {
            const dataAtual = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
            return dataAtual;
        },
    },

    watch: {
        dataInicialCalculo() {
            this.inicio = null;
        },
        dataFinalCalculo() {
            this.fim = this.dataHoje;
        },
        dataFinalProRata() {
            this.fim = this.dataHoje;
        },
    },

    async mounted() {
        this.fim = this.dataHoje;
        await this.buscaInfoPessoa();
        this.paradaCarregando();
        this.buscaIndices();
    },

    methods: {
        async calcular(valorFinalProRata = 0, dataConvertidaInicio, dataConvertidaFinal) {
            this.carregando = true;
            let resultado = this.valor;
            let substituiValor = this.valor;
            let [mes, ano] = this.dataInicialCalculo.split('/');
            let dataInicio = new Date(ano, Number.parseInt(mes) - 1, 1);

            [mes, ano] = this.dataFinalCalculo.split('/');
            let dataFim = new Date(ano, Number.parseInt(mes) - 1, 1);

            if (valorFinalProRata != 0) {
                substituiValor = valorFinalProRata;
                dataInicio = dataConvertidaInicio;
                dataFim = dataConvertidaFinal;
                dataFim.setMonth(dataFim.getMonth() - 1);
            }

            if (dataInicio < dataFim) {
                while (dataInicio < dataFim) {
                    
                    let indicesAno = this.dados.filter((lista) => lista.ano == dataInicio.getFullYear());
                    let indicesMes = indicesAno[0].indices[dataInicio.getMonth()];

                    dataInicio.setMonth(dataInicio.getMonth() + 1);

                    let total = parseFloat(substituiValor) * (indicesMes / 100) + parseFloat(substituiValor);
                   
                    substituiValor = total;
                }
                this.valorAtual = substituiValor;
                substituiValor = resultado;

                this.acrescentaHistorico(
                    this.dataInicialCalculo,
                    this.dataFinalCalculo,
                    substituiValor,
                    this.valorAtual
                );
            } else {
                this.carregando = false;
                this.valorAtual = 0;
            }
            this.carregando = false;
            return this.valorAtual;
        },
        async calcularProRata() {
            let [dia, mes, ano] = this.dataInicialProRata.split('/');

            let dataConvertidaInicio = new Date(ano, mes, dia);
            dataConvertidaInicio.setMonth(dataConvertidaInicio.getMonth() - 1);
            let dataConvertidaMaior = new Date(ano, mes, 0);
            let dataParametroInicio = new Date(ano, mes, 1);

            let [diaFim, mesFim, anoFim] = this.dataFinalProRata.split('/');
            let dataConvertidaFinal = new Date(anoFim, mesFim, diaFim);
            dataConvertidaFinal.setMonth(dataConvertidaFinal.getMonth() - 1);
            let dataConvertidaMaiorFinal = new Date(anoFim, mesFim, 0);
            let dataParametroFim = new Date(anoFim, mesFim, 1);

            let indiceInicio = dataConvertidaMaior.getDate() - dataConvertidaInicio.getDate() + 1;

            await this.buscaIndices(dataConvertidaInicio.getFullYear(), dataConvertidaFinal.getFullYear());
            
            let indiceAno = this.dados.filter((lista) => lista.ano == dataConvertidaInicio.getFullYear());
            let indiceMes = indiceAno[0].indices[dataConvertidaInicio.getMonth()];

            let primeiroIndiceProRata = indiceMes / dataConvertidaMaior.getDate();
            let indiceProRata = primeiroIndiceProRata * indiceInicio;
            let valorTotalProRataInicial = parseFloat(this.valor) * (indiceProRata / 100) + parseFloat(this.valor);

            let valorTotalProRata = await this.calcular(valorTotalProRataInicial, dataParametroInicio, 
            dataParametroFim);

            let indiceAnoFinal = this.dados.filter((listaFim) => listaFim.ano == dataConvertidaFinal.getFullYear());
            let indicesMesFinal = indiceAnoFinal[0].indices[dataConvertidaFinal.getMonth()];

            let segundoIndiceProRata = indicesMesFinal / dataConvertidaMaiorFinal.getDate();
            let indiceProRataFinal = segundoIndiceProRata * parseFloat(diaFim);
            this.valorAtual =
                parseFloat(valorTotalProRata) * (indiceProRataFinal / 100) + parseFloat(valorTotalProRata);

        },
        limpar() {
            if (this.dataInicialCalculo != null) {
                this.inicio = '';
            }
            this.fim = '1998-05';
            this.valor = 0;
            this.valorAtual = 0;
        },
        limparHistorico() {
            this.historico = [];
        },
        acrescentaHistorico(dataInicialCalculo, dataFinalCalculo, valor, valorAtual) {
            this.historico.push({
                inicio: dataInicialCalculo,
                fim: dataFinalCalculo,
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
        async buscaInfoPessoa() {
            let resposta = await axios.get('https://random-data-api.com/api/v2/users');
            this.pessoa = resposta.data;
        },
        async buscaIndices(anoInicial = '1994', anoFinal = '2022') {
            let resp = await axios.get(`http://localhost:8000/api/inpc/${anoInicial}/${anoFinal}`);
            this.dados = resp.data;
        },
        paradaCarregando(){
            this.carregando = false;
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
