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
                                <input-month v-model="mesAno" dense label="Início" outlined/>
                                <input-month v-model="fimMesAno" dense label="Fim" outlined class="mb-5" />
                                <v-col>
                                    <input-money v-model="valor"    
                                    dense outlined label="Digite o Valor" />
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
            data: 0,
            valor: 0,
            result: 0,
            label: 'valor, result',
            options: {
                locale: 'pt-BR',
                prefix: 'R$',
                suffix: '',
                length: 11,
                precision: 2,
            },
            picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
            carregando: false,
            valorPadrao: 0,
            mesAno: '',
            fimMesAno: '',
        };
    },
    computed: {
        indices() {
            return indices;
        },
    },

    methods: {

        calcular() {
            let valorRecebido = this.valor
            let temp = this.mesAno.split('/')
            let dataTempInicio = [parseInt(temp[0]), parseInt(temp[1])]
            let dataInicio = new Date(dataTempInicio)

            let tempo = this.fimMesAno.split('/')
            let dataTempFim = [parseInt(tempo[0]), parseInt(tempo[1])]
            let dataFim = new Date(dataTempFim)
            console.log(dataInicio, dataFim)

            while(dataInicio < dataFim){
                debugger
                let indiceAno = this.indices.filter((temp) => temp.ano == dataInicio.getFullYear()) 
                let indiceMes = indiceAno[0].indices[dataInicio.getMonth()]
                dataInicio.setMonth(dataInicio.getMonth() + 1)

                let total = parseFloat(this.valor) * (indiceMes / 100) + parseFloat(this.valor);
                this.valor = total;
            }
            this.result = this.valor
            this.valor = valorRecebido
        },

        limpar() {
            (this.data = ''), (this.valor = 0), (this.result = 0);
        },
    },
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
