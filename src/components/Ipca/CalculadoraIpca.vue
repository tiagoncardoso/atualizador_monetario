<template>
    <v-row>
        <v-col cols="8" offset="2">
            <v-card elevation="10" class="blue">
                <v-card-text class="white">
                    <v-row>
                        <v-col cols="8" class="top-line">
                            <v-row>
                                <v-col class="mb-4 mt-8 letra">
                                    <h3>Informações Obrigatórias*</h3>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="5" sm="5" offset="1">
                                    <input-month
                                        v-model="mesAno"
                                        dense
                                        :data-padrao="limpaAno"
                                        label="Início"
                                        outlined
                                    />
                                </v-col>

                                <v-col cols="5" sm="5">
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
                                    <div class="div-resultado">
                                        <span>VALOR ATUALIZADO</span>
                                        <br/>
                                        <span>R$ </span>
                                        <span>{{result}}</span>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="4" class="tabela letra">
                            <h4>Histórico (Últimos 10 cálculos)</h4>
                            <hr/>
                            <p class="mt-5">50455045</p>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-row>
                        <v-col cols="12" class="text-right">
                            <v-btn small class="mr-3" color="primary" @click="calcular()">Calcular</v-btn>
                            <v-btn small color="error" @click="limpar()">Limpar</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
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

.white {
    background-color: rgb(255, 255, 255) !important;
}

.blue {
    background-color: #F0F0F0 !important;
}

.tabela {
    border-width: 1px;
    border-color: rgb(139 139 139 / 39%);
    border-style: solid;
   border-radius: 4px;
}

.tabelaFina{
    border-width: 1px;
    outline: 1px solid #8f8989;
    border-color: rgb(163, 150, 150);
    border-radius: 1px;
}
.espaco{  
    margin-bottom: 125px;
}
.letra{
    color: black;
}

.div-resultado {
    height: 41px;
    background-color: bisque;
}
</style>
