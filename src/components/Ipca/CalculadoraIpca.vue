<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="6" offset="3">
                <v-card color="#81c77b" class="elevation-12" rounded>
                    <v-toolbar color="green" class="darken-4">
                        <h1>Calculadora IPCA</h1>
                    </v-toolbar>
                    <v-card-text>
                        <v-row>
                            <v-col cols="4" offset="4" class="mt-10">
                                <input-month v-model="mesAno" label="Mês/Ano" class="mb-5" regular />
                                <v-col>
                                    <vuetify-money
                                        v-model="valor"
                                        label="Digite o valor"
                                        regular
                                        dense
                                        background-color="#FFFFF"
                                        counter
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
                                >
                                <vuetify-money
                                    v-model="result"
                                    label="Resultado"
                                    filled
                                    dense
                                    counter
                                    :loading="carregando"
                                    background-color="#FFFFF"
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

export default {
    name: 'CalculadoraIpca',

    components: {
        InputMonth,
    },

    data() {
        return {
            data: ' ',
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
            dataPadrao: '',
            mesAno: '13',
        };
    },
    computed: {
        indices() {
            return indices;
        },
    },

    methods: {
        pick(age, mounth) {
            //let digitos = data.split('/')
            //let age = digitos[2]
            //let mounth = digitos [1]
            let laco = mounth - 1;

            if (mounth >= 1 && mounth <= 12) {
                if (age == 1994) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['1994'][laco];
                    }
                } else if (age == 1995) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['1995'][laco];
                    }
                } else if (age == 1996) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['1996'][laco];
                    }
                } else if (age == 1997) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['1997'][laco];
                    }
                } else if (age == 1998) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['1998'][laco];
                    }
                } else if (age == 1999) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['1999'][laco];
                    }
                } else if (age == 2000) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2000'][laco];
                    }
                } else if (age == 2001) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2001'][laco];
                    }
                } else if (age == 2002) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2002'][laco];
                    }
                } else if (age == 2003) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2003'][laco];
                    }
                } else if (age == 2004) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2004'][laco];
                    }
                } else if (age == 2005) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2005'][laco];
                    }
                } else if (age == 2006) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2006'][laco];
                    }
                } else if (age == 2007) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2007'][laco];
                    }
                } else if (age == 2008) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2008'][laco];
                    }
                } else if (age == 2009) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2009'][laco];
                    }
                } else if (age == 2010) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2010'][laco];
                    }
                } else if (age == 2011) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2011'][laco];
                    }
                } else if (age == 2012) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2012'][laco];
                    }
                } else if (age == 2013) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2013'][laco];
                    }
                } else if (age == 2014) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2014'][laco];
                    }
                } else if (age == 2015) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2015'][laco];
                    }
                } else if (age == 2016) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2016'][laco];
                    }
                } else if (age == 2017) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2017'][laco];
                    }
                } else if (age == 2018) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2018'][laco];
                    }
                } else if (age == 2019) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2019'][laco];
                    }
                } else if (age == 2020) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2020'][laco];
                    }
                } else if (age == 2021) {
                    for (laco; laco != parseFloat(mounth); laco++) {
                        return this.indices['2021'][laco];
                    }
                } else if (age == 2022) {
                    if (mounth >= 1 && mounth <= 6) {
                        for (laco; laco != parseFloat(mounth); laco++) {
                            return this.indices['2022'][laco];
                        }
                    } else {
                        return 'Mês incorreto!';
                    }
                } else {
                    return 'Ano incorreto';
                }
            } else {
                this.result = 'Mês incorreto!';
            }
        },

        calcular() {
            const digitos = this.mesAno.split('/');
            let ano = parseFloat(digitos[1]);
            let mes = parseFloat(digitos[0]);
            let primeiroValor = this.valor;

            if (ano >= 1994 && ano <= 2022 && mes >= 1 && mes <= 12) {
                if (ano == 1994 && mes <= 6) {
                    this.result = 0;
                } else {
                    while (ano != 2023) {
                        if (ano != 2022) {
                            for (mes; mes <= 12; mes++) {
                                let indice = this.pick(ano, mes);
                                let total =
                                    parseFloat(this.valor) * (parseFloat(indice) / 100) + parseFloat(this.valor);
                                this.valor = total;
                            }
                        } else if (ano == 2022) {
                            for (mes; mes <= 6; mes++) {
                                let indice = this.pick(ano, mes);
                                let total =
                                    parseFloat(this.valor) * (parseFloat(indice) / 100) + parseFloat(this.valor);
                                this.valor = total;
                            }
                        }
                        ano++;
                        mes = 1;
                    }
                    this.result = this.valor;
                    this.valor = primeiroValor;
                }
            } else {
                this.result = 0;
            }
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
}
</style>
