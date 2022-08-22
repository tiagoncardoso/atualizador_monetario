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
        valores() {

        dataInicio = new Date(date);
        dataFim = new Date(date)

            while(dataInicio < dataFim){
                let indicesAno = arrayIndices.filter((lista) => lista.ano == dataInicio,getFullYear())
                let indicesMes = indicesAno[0].indice[dataInicio.getMonth()]

                dataInicio.setMonth(dataInicio.getMonth() + 1)
            }
        },
        calcular() {

            const arrayData = this.mesAno.split('/');
            const finalData = this.final.split('/');
            let mes = parseFloat(arrayData[0]);
            let ano = parseFloat(arrayData[1]);
            let mesFinal = parseFloat(finalData[0]);
            let anoFinal = parseFloat(finalData[1]);
            let resultado = 0;
            let recebeValor = this.valor;
            let mesDiminui = mes - 1;
            let mesTemp = 12;

            if (anoFinal >= 1994 && anoFinal <= 2023) {
                if (ano >= 1994 && ano <= anoFinal) {
                    for (ano; ano <= anoFinal; ano++) {
                        if (ano == anoFinal && mesTemp == 12) {
                            mesTemp = mesFinal - 1;
                        }
                        if (ano != 2022) {
                            if (ano == anoFinal && mes == mesFinal - 1) {
                                mesTemp = mesDiminui - 1;
                            } else {
                                for (mesDiminui; mesDiminui < mesTemp; mesDiminui++) {
                                    resultado =
                                        parseFloat(this.valor) * (parseFloat(this.arrayIndices[ano][mesDiminui]) / 100) +
                                        parseFloat(this.valor);
                                    this.valor = parseFloat(resultado);
                                }
                                mesDiminui = 0;
                            }
                        } else if (ano == 2022) {
                            for (ano; ano == 2022; ) {
                                for (mesDiminui; mesDiminui < mesFinal - 1; mesDiminui++) {
                                    resultado =
                                        parseFloat(this.valor) * (parseFloat(this.arrayIndices[ano][mesDiminui]) / 100) +
                                        parseFloat(this.valor);
                                    this.valor = resultado;
                                }
                                ano++;
                            }
                        }
                    }
                    this.valorAtual = this.valor;
                    this.valor = recebeValor;
                } else {
                    this.valor = 0;
                }
            }
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
