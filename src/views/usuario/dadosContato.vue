<template>
    <div>
        <v-card elevation="11">
            <v-toolbar> Endereço </v-toolbar>
            <v-row class="mt-3">
                <v-col cols="5">
                    <v-text-field
                        v-model="logradouro"
                        label="Logradouro"
                        outlined
                        dense
                        persistent-placeholder
                        placeholder="South Claredon Drive"
                    />
                </v-col>
                <v-col cols="2">
                    <v-text-field
                        v-model="numero"
                        label="Número"
                        outlined
                        dense
                        persistent-placeholder
                        placeholder="45"
                    />
                </v-col>
                <v-col cols="5">
                    <v-text-field v-model="complemento" label="Complemento" outlined dense />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-text-field
                        v-model="bairro"
                        label="Bairro"
                        outlined
                        dense
                        persistent-placeholder
                        placeholder="New Street"
                    />
                </v-col>
                <v-col cols="2">
                    <input-cep 
                        v-model="cep"
                        label="CEP" 
                        outlined 
                        dense 
                        persistentPlaceholder 
                        placeholder="16400-001" 
                    />
                </v-col>
                <v-col cols="2">
                    <v-select v-model="uf" label="UF" outlined dense persistent-placeholder placeholder="CE" />
                </v-col>
                <v-col cols="4">
                    <v-select
                        v-model="cidade"
                        label="Cidade"
                        outlined
                        dense
                        persistent-placeholder
                        placeholder="Baixio"
                    />
                </v-col>
            </v-row>
        </v-card>
        <v-card class="mt-10" elevation="16">
            <v-toolbar> Contato </v-toolbar>

            <v-row class="mt-5">
                <v-col cols="4">
                    <v-text-field
                        v-model="telefone"
                        label="Telefone"
                        outlined
                        dense
                        persistent-placeholder
                        placeholder="(51) 7664-6841"
                    />
                </v-col>
                <v-col cols="4">
                    <v-text-field
                        v-model="email"
                        label="Email"
                        outlined
                        dense
                        persistent-placeholder
                        placeholder="ryvipiqax@malinator.com"
                    />
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import InputCep from '@/components/shared/InputCep.vue';
export default {
    name: 'DadosContato',
    components: {
        InputCep,
    },
    data() {
        return {
            logradouro: '',
            numero: "",
            complemento: '',
            bairro: '',
            cep: '',
            uf: '',
            cidade: '',
            telefone: '',
            email: '',
        };
    },
};
</script>

<style scoped></style>