<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="6" offset="3">
                <v-card color="#98C0D6" class="elevation-12" rounded>
                    <v-toolbar color="#144E73" class="cor">
                        <h1>Calculadora IPCA</h1>
                    </v-toolbar>
                    <v-card-text>
                        <v-row>
                            <v-col cols="4" offset="4" class="">
                                <input-month v-model="mesAno" dense :data-padrao="limpaAno" label="Início" outlined />
                                <input-month v-model="fimMesAno" dense label="Fim" outlined class="mb-5" />
                                <v-col>
                                    <input-money
                                        v-model="valor"
                                        :valor-padrao="valor"
                                        dense
                                        outlined
                                        label="Digite o Valor"
                                    />
                                </v-col>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="8" offset="2" class="mb-2">
                                <v-btn class="separar" color="primary mr-3" @click="calcular()">Calcular</v-btn>
                                <v-btn color="error" @click="limpar()">Limpar</v-btn>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="0" offset="0" sm="4" offset-sm="4" lg="4" offset-lg="4">
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
                </v-card>
            </v-col>
        </v-row>
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
            limpaAno: '',
        };
    },

    computed: {
        indices() {
            return indices;
        },
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
                this.result = 0;
            }
        },

        limpar() {
            debugger
            this.limpaAno = '';
            this.valor = 0;
            this.result = 0
        },
    },

    mounted() {
        
    }
};
</script>

<style scoped>
.v-btn {
    width: 100px;
    color: #ffff;
}

.cor {
    color: #ffff;
}
</style>
