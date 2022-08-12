<template>
    <v-container>
        <v-row>
            <v-col
                cols="4"
                class="mt-10 offset-4 text-center input-group form-group mb-3"
            >
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary" class="text-center mb-4">
                        <v-toolbar-title
                            >Atualização monetária- INPC</v-toolbar-title
                        >
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-row>
                                <v-col cols="6" offset="3">
                                    <input-date v-model='data' label='Data' :dataEnviada='dataPadrao'/>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6" offset="3">
                                    <vuetify-money
                                        v-model="valor"
                                        label="Valor"
                                        outlined
                                        dense
                                        clearable
                                        background-color="white"
                                        color="black"
                                        :options="options"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-btn
                                        type="button"
                                        class="mr-3"
                                        color="primary"
                                        @click="calcular()"
                                        >Calcular</v-btn
                                    >
                                    <v-btn
                                        type="button"
                                        color="error"
                                        @click="limpar()"
                                        >Limpar</v-btn
                                    >
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6" offset="3">
                                    <vuetify-money
                                        v-model="valorAtual"
                                        label="Valor atualizado"
                                        outlined
                                        dense
                                        clearable
                                        background-color="white"
                                        color="black"
                                        :options="options"
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
import InputDate from '../shared/InputDate.vue';
export default {
    components: { InputDate },
    name: "CalculadoraInpc",
    data() {
        return {
            data: '',
            carregando: false,
            valor: "0",
            valorAtual: "0",
            label: "valor, valorAtual",
            options: {
                locale: "pt-BR",
                prefix: "R$ ",
                suffix: "",
                length: 11,
                precision: 2,
            },
            dataPadrao: '',
        };
    },
    computed: {
        indices() {
            return {
                1994: [
                    0.65, 1.29, 1.28, 0.47, 0.05, 0.07, 0.74, 0.55, 0.39, 0.96,
                    0.94, 0.74,
                ],
                1995: [
                    1.44, 1.01, 1.62, 2.49, 2.1, 2.18, 2.46, 1.02, 1.17, 1.4,
                    1.51, 1.65,
                ],
                1996: [
                    1.46, 0.71, 0.29, 0.93, 1.28, 1.33, 1.2, 0.5, 0.02, 0.38,
                    0.34, 0.33,
                ],
                1997: [
                    0.81, 0.45, 0.68, 0.6, 0.11, 0.35, 0.18, -0.03, 0.1, 0.29,
                    0.15, 0.57,
                ],
                1998: [
                    0.85, 0.54, 0.49, 0.45, 0.72, 0.15, -0.28, -0.49, -0.31,
                    0.11, -0.18, 0.42,
                ],
                1999: [
                    0.65, 1.29, 1.28, 0.47, 0.05, 0.07, 0.74, 0.55, 0.39, 0.96,
                    0.94, 0.74,
                ],
                2000: [
                    0.61, 0.05, 0.13, 0.09, -0.05, 0.3, 1.39, 1.21, 0.43, 0.16,
                    0.29, 0.55,
                ],
                2001: [
                    0.77, 0.49, 0.48, 0.84, 0.57, 0.6, 1.11, 0.79, 0.44, 0.94,
                    1.29, 0.74,
                ],
                2002: [
                    1.07, 0.31, 0.62, 0.68, 0.09, 0.61, 1.15, 0.86, 0.83, 1.57,
                    3.39, 2.7,
                ],
                2003: [
                    2.47, 1.46, 1.37, 1.38, 0.99, -0.06, 0.04, 0.18, 0.82, 0.39,
                    0.37, 0.54,
                ],
                2004: [
                    0.83, 0.39, 0.57, 0.41, 0.4, 0.5, 0.73, 0.5, 0.17, 0.17,
                    0.44, 0.86,
                ],
                2005: [
                    0.57, 0.44, 0.73, 0.91, 0.7, -0.11, 0.03, 0.0, 0.15, 0.58,
                    0.54, 0.4,
                ],
                2006: [
                    0.38, 0.23, 0.27, 0.12, 0.13, -0.07, 0.11, -0.02, 0.16,
                    0.43, 0.42, 0.62,
                ],
                2007: [
                    0.49, 0.42, 0.44, 0.26, 0.26, 0.31, 0.32, 0.59, 0.25, 0.3,
                    0.43, 0.97,
                ],
                2008: [
                    0.69, 0.48, 0.51, 0.64, 0.96, 0.91, 0.58, 0.21, 0.15, 0.5,
                    0.38, 0.29,
                ],
                2009: [
                    0.64, 0.31, 0.2, 0.55, 0.6, 0.42, 0.23, 0.08, 0.16, 0.24,
                    0.37, 0.24,
                ],
                2010: [
                    0.88, 0.7, 0.71, 0.73, 0.43, -0.11, -0.07, -0.07, 0.54,
                    0.92, 1.03, 0.6,
                ],
                2011: [
                    0.94, 0.54, 0.66, 0.72, 0.57, 0.22, 0.0, 0.42, 0.45, 0.32,
                    0.57, 0.51,
                ],
                2012: [
                    0.51, 0.39, 0.18, 0.64, 0.55, 0.26, 0.43, 0.45, 0.63, 0.71,
                    0.54, 0.74,
                ],
                2013: [
                    0.92, 0.52, 0.6, 0.59, 0.35, 0.28, -0.13, 0.16, 0.27, 0.61,
                    0.54, 0.72,
                ],
                2014: [
                    0.63, 0.64, 0.82, 0.78, 0.6, 0.26, 0.13, 0.18, 0.49, 0.38,
                    0.53, 0.62,
                ],
                2015: [
                    1.48, 1.16, 1.51, 0.71, 0.99, 0.77, 0.58, 0.25, 0.51, 0.77,
                    1.11, 0.9,
                ],
                2016: [
                    1.51, 0.95, 0.44, 0.64, 0.98, 0.47, 0.64, 0.31, 0.08, 0.17,
                    0.07, 0.14,
                ],
                2017: [
                    0.42, 0.24, 0.32, 0.08, 0.36, -0.3, 0.17, -0.03, -0.02,
                    0.37, 0.18, 0.26,
                ],
                2018: [
                    0.23, 0.18, 0.07, 0.21, 0.43, 1.43, 0.25, 0.0, 0.3, 0.4,
                    -0.25, 0.14,
                ],
                2019: [
                    0.36, 0.54, 0.77, 0.6, 0.15, 0.01, 0.1, 0.12, -0.05, 0.04,
                    0.54, 1.22,
                ],
                2020: [
                    0.19, 0.17, 0.18, -0.23, -0.25, 0.3, 0.44, 0.36, 0.87, 0.89,
                    0.95, 1.46,
                ],
                2021: [
                    0.27, 0.82, 0.86, 0.38, 0.96, 0.6, 1.02, 0.88, 1.2, 1.16,
                    0.84, 0.73,
                ],
                2022: [0.67, 1.0, 1.71, 1.04, 0.45, 0.62],
            };
        },
    },
    methods: {
        valores(ano, mes) {
            let repeticao = mes - 1; //repetição

            if (mes >= 1 && mes <= 12) {
                switch (ano) {
                    case "1994":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["1994"][repeticao];
                        }
                        break;

                    case "1995":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["1995"][repeticao];
                        }
                        break;

                    case "1996":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["1996"][repeticao];
                        }
                        break;

                    case "1997":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["1997"][repeticao];
                        }
                        break;

                    case "1998":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["1998"][repeticao];
                        }
                        break;

                    case "1999":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["1999"][repeticao];
                        }
                        break;

                    case "2000":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2000"][repeticao];
                        }
                        break;

                    case "2001":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2001"][repeticao];
                        }
                        break;

                    case "2002":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2002"][repeticao];
                        }
                        break;

                    case "2002":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2002"][repeticao];
                        }
                        break;

                    case "2003":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2003"][repeticao];
                        }
                        break;

                    case "2004":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2004"][repeticao];
                        }
                        break;

                    case "2005":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2005"][repeticao];
                        }
                        break;

                    case "2006":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2006"][repeticao];
                        }
                        break;

                    case "2007":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2007"][repeticao];
                        }
                        break;

                    case "2008":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2008"][repeticao];
                        }
                        break;

                    case "2009":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2009"][repeticao];
                        }
                        break;

                    case "2010":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2010"][repeticao];
                        }
                        break;

                    case "2011":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2011"][repeticao];
                        }
                        break;

                    case "2012":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2012"][repeticao];
                        }
                        break;

                    case "2013":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2013"][repeticao];
                        }
                        break;

                    case "2014":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2014"][repeticao];
                        }
                        break;

                    case "2015":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2015"][repeticao];
                        }
                        break;

                    case "2016":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2016"][repeticao];
                        }
                        break;

                    case "2017":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2017"][repeticao];
                        }
                        break;

                    case "2018":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2018"][repeticao];
                        }
                        break;

                    case "2019":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2019"][repeticao];
                        }
                        break;

                    case "2020":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2020"][repeticao];
                        }
                        break;

                    case "2021":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2021"][repeticao];
                        }
                        break;

                    case "2022":
                        for (
                            repeticao;
                            repeticao != parseFloat(mes);
                            repeticao++
                        ) {
                            this.valorAtual = this.indices["2022"][repeticao];
                        }
                        break;

                    default:
                        this.valorAtual = "Ano ou mês inválido";
                }
            } else {
                this.valorAtual = "Tente novamente!";
            }
        },

        calcular() {
            const arrayData = this.data.split("/"); //split divide a string
            let mes = parseFloat(arrayData[1]); //Segunda data
            let ano = parseFloat(arrayData[2]); //Terceira data
            let resultado = 0; //atribui o valor
            let recebeValor = this.valor;
            let mesDiminui = mes - 1;

            if (ano >= 1994 && ano <= 2022) {
                for (ano; ano <= 2021; ano++) {
                    for (mesDiminui; mesDiminui < 12; mesDiminui++) {
                        resultado =
                            parseFloat(this.valor) *
                                (parseFloat(this.indices[ano][mesDiminui]) /
                                    100) +
                            parseFloat(this.valor);
                        this.valor = parseFloat(resultado);
                    }
                    mesDiminui = 0;
                }
                for (ano; ano == 2022; ano++) {
                    for (mesDiminui; mesDiminui < 6; mesDiminui++) {
                        resultado =
                            parseFloat(this.valor) *
                                (parseFloat(this.indices[ano][mesDiminui]) /
                                    100) +
                            parseFloat(this.valor);
                        this.valor = resultado;
                    }
                }
            } else {
                this.valor = "Tente novamente, ano inválido!";
            }

            this.valorAtual = this.valor;
            this.valor = recebeValor;
        },

        limpar() {
            this.data = "";
            this.valor = 0;
            this.valorAtual = 0;
        },
    },
};
</script>

<style>
.v-card {
    background: #bbdefb !important;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Numans", sans-serif;
}

.v-btn {
    width: 100px;
}

template {
    background: #e3f2fd;
}
</style>