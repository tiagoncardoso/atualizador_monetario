<template>
    <div>
        <v-card elevation="11" class="mt-10">
            <v-toolbar> Endereço </v-toolbar>
            <v-row class="mt-3">
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
                        outlined dense 
                        :rules="regra.complement"
                    />
                </v-col>
            </v-row>
            <v-row>
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
                    />
                </v-col>
            </v-row>
        </v-card>
        <v-card class="mt-10" elevation="16">
            <v-toolbar> Contato </v-toolbar>

            <v-row class="mt-5">
                <v-col cols="4">
                    <input-phone
                        v-model="dadosContato.telefone"
                        label="Telefone"
                        outlined
                        dense
                        persistent-placeholder
                        placeholder="(051) 7664-6841"
                    />
                </v-col>
                <v-col cols="4">
                    <v-text-field
                        v-model="dadosContato.email"
                        label="Email"
                        outlined
                        dense
                        persistent-placeholder
                        placeholder="ryvipiqax@malinator.com"
                        :rules="regra.mail"
                    />
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import InputCep from '@/components/shared/InputCep.vue';
import InputPhone from '@/components/shared/InputPhone.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'DadosContato',
    components: {
        InputCep,
        InputPhone,
    },
    
    computed: {
        ...mapGetters('usuario', ['dadosContato', 'listaUfs']),
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
                mail: [(v) => !!v || 'Campo Obrigatório', (v) => v.length <= 100 || 'Máximo 100 dígitos'],
            },
        };
    },
};
</script>

<style scoped></style>
