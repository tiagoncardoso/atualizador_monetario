<template>
    <v-container>
        <v-row>
            <v-col cols="4" class="mt-10 offset-4 text-center input-group form-group mb-3">
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary" class="text-center mb-4">
                        <v-toolbar-title> Atualização monetária- INPC </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-row>
                                <v-col cols="6" offset="3">
                                    <input-month-year
                                        v-model="mesAno"
                                        label="mes/ano"
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
                                        dense
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
import { indices } from './Inpc';
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
            label: 'valor, valorAtual',
            options: {
                locale: 'pt-BR',
                prefix: 'R$ ',
                suffix: '',
                length: 11,
                precision: 2,
            },
        };
    },
    computed: {
        indices() {
            return indices;
        },
    },

    methods: {
        valores(ano, mes) {
            let repeticao = mes - 1; //repetição

            if (mes >= 1 && mes <= 12) {
                switch (ano) {
                    case '1994':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['1994'][repeticao];
                        }
                        break;

                    case '1995':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['1995'][repeticao];
                        }
                        break;

                    case '1996':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['1996'][repeticao];
                        }
                        break;

                    case '1997':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['1997'][repeticao];
                        }
                        break;

                    case '1998':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['1998'][repeticao];
                        }
                        break;

                    case '1999':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['1999'][repeticao];
                        }
                        break;

                    case '2000':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2000'][repeticao];
                        }
                        break;

                    case '2001':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2001'][repeticao];
                        }
                        break;

                    case '2002':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2002'][repeticao];
                        }
                        break;

                    case '2003':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2003'][repeticao];
                        }
                        break;

                    case '2004':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2004'][repeticao];
                        }
                        break;

                    case '2005':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2005'][repeticao];
                        }
                        break;

                    case '2006':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2006'][repeticao];
                        }
                        break;

                    case '2007':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2007'][repeticao];
                        }
                        break;

                    case '2008':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2008'][repeticao];
                        }
                        break;

                    case '2009':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2009'][repeticao];
                        }
                        break;

                    case '2010':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2010'][repeticao];
                        }
                        break;

                    case '2011':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2011'][repeticao];
                        }
                        break;

                    case '2012':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2012'][repeticao];
                        }
                        break;

                    case '2013':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2013'][repeticao];
                        }
                        break;

                    case '2014':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2014'][repeticao];
                        }
                        break;

                    case '2015':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2015'][repeticao];
                        }
                        break;

                    case '2016':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2016'][repeticao];
                        }
                        break;

                    case '2017':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2017'][repeticao];
                        }
                        break;

                    case '2018':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2018'][repeticao];
                        }
                        break;

                    case '2019':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2019'][repeticao];
                        }
                        break;

                    case '2020':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2020'][repeticao];
                        }
                        break;

                    case '2021':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2021'][repeticao];
                        }
                        break;

                    case '2022':
                        for (repeticao; repeticao != parseFloat(mes); repeticao++) {
                            this.valorAtual = this.indices['2022'][repeticao];
                        }
                        break;

                    default:
                        this.valorAtual = 'Ano ou mês inválido';
                }
            } else {
                this.valorAtual = 'Tente novamente!';
            }
        },

        calcular() {
            const arrayData = this.mesAno.split('/');
            let mes = parseFloat(arrayData[0]);
            let ano = parseFloat(arrayData[1]);
            let resultado = 0;
            let recebeValor = this.valor;
            let mesDiminui = mes - 1;

            if (ano >= 1994 && ano <= 2022) {
                for (ano; ano <= 2021; ano++) {
                    for (mesDiminui; mesDiminui < 12; mesDiminui++) {
                        resultado =
                            parseFloat(this.valor) * (parseFloat(this.indices[ano][mesDiminui]) / 100) +
                            parseFloat(this.valor);
                        this.valor = parseFloat(resultado);
                    }
                    mesDiminui = 0;
                }
                for (ano; ano == 2022; ano++) {
                    for (mesDiminui; mesDiminui < 6; mesDiminui++) {
                        resultado =
                            parseFloat(this.valor) * (parseFloat(this.indices[ano][mesDiminui]) / 100) +
                            parseFloat(this.valor);
                        this.valor = resultado;
                    }
                }
            } else {
                this.valor = 'Tente novamente, ano inválido!';
            }

            this.valorAtual = this.valor;
            this.valor = recebeValor;
        },

        limpar() {
            this.data = '';
            this.valor = 0;
            this.valorAtual = 0;
        },
    },
};
</script>

<style scoped>
.v-card {
    background: #bbdefb !important;
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
