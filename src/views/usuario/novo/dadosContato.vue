<template>
    <div>
        <v-form>
            <v-card elevation="12" class="mt-10">
                <v-toolbar> Endereço </v-toolbar>
                <v-container>
                    <v-row>
                        <v-col cols="5">
                            <v-text-field
                                v-model="dadosContato.logradouro"
                                label="Logradouro"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="South Claredon Drive"
                                :rules="regra.endereco"
                            />
                        </v-col>
                        <v-col cols="2">
                            <v-text-field
                                v-model="dadosContato.numero"
                                label="Número"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="0"
                                :rules="regra.number"
                            />
                        </v-col>
                        <v-col cols="5">
                            <v-text-field
                                v-model="dadosContato.complemento"
                                label="Complemento"
                                outlined
                                dense
                                :rules="regra.complement"
                            />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                v-model="dadosContato.bairro"
                                label="Bairro"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="New Street"
                                :rules="regra.neighborhood"
                            />
                        </v-col>

                        <v-col cols="2">
                            <input-cep
                                v-model="dadosContato.cep"
                                label="CEP"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="16400-001"
                            />
                        </v-col>

                        <v-col cols="2">
                            <v-select
                                v-model="dadosContato.uf"
                                :items="listaUfs"
                                label="UF"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="CE"
                                :rules="regra.estate"
                                return-object
                                item-value="id"
                                item-text="uf"
                            />
                        </v-col>

                        <v-col cols="4">
                            <v-select
                                v-model="dadosContato.cidade"
                                label="Cidade"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="Baixio"
                                :rules="regra.city"
                                :items="listaCidades"
                                return-object
                                item-value="nome"
                                item-text="nome"
                                :disabled="regra.disabled"
                                :loading="regra.disabled"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-form>
        <v-form>
            <v-card elevation="12" class="mt-10">
                <v-toolbar> Contato </v-toolbar>
                <v-container>
                    <v-row class="mt-5">
                        <v-col cols="2">
                            <input-phone
                                v-model="dadosContato.telefone"
                                label="Telefone"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="(051) 7664-6841"
                            />
                        </v-col>

                        <v-col cols="5">
                            <v-text-field
                                v-model="dadosContato.email"
                                label="E-mail*"
                                :rules="regra.emailRules"
                                required
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="usuario@usuario.com"
                            />
                        </v-col>

                        <v-col cols="5">
                            <v-text-field
                                v-model="dadosContato.email2"
                                label="Outro e-mail"
                                required
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="usuario@usuario.com"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-form>
    </div>
</template>

<script>
import InputCep from '@/components/shared/InputCep.vue';
import InputPhone from '@/components/shared/InputPhone.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'DadosContato',
    components: {
        InputCep,
        InputPhone,
    },
    
    computed: {
        ...mapGetters('usuario', ['dadosContato', 'listaUfs', 'listaCidades']),
    },

    data() {
        return {
            regra: {
                endereco: [(v) => !!v || 'Campo Obrigatório', (v) => v.length <= 150 || 'Máximo 150 dígitos'],
                number: [(v) => !!v || 'Campo Obrigatório', (v) => v.length <= 6 || 'Máximo 6 dígitos'],
                complement: [(v) => v.length <= 150 || 'Máximo 150 dígitos'],
                neighborhood: [(v) => !!v || 'Campo Obrigatório', (v) => v.length <= 100 || 'Máximo 100 dígitos'],
                estate: [(v) => !!v || 'Campo Obrigatório'],
                city: [(v) => !!v || 'Campo Obrigatório'],
                emailRules: [(v) => !!v || 'Campo obrigatório', (v) => /.+@.+/.test(v) || 'E-mail inválido'],
                disabled: true,
            },
        };
    },

    methods: {
        ...mapActions('usuario', ['fetchCidades']),
    },

    watch: {
        async 'dadosContato.uf'() {
            await this.fetchCidades(this.dadosContato.uf.id);
            this.regra.disabled = false;
        },
    },
};
</script>

<style scoped></style>
