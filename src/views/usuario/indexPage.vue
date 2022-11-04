<template>
    <div>
        <v-card>
            <v-card-title>
                Usuários
            </v-card-title>
            <v-btn class="botao" to="usuario/novo" color="primary" >Novo</v-btn>
            <v-data-table 
                :headers="headers" 
                :items="buscaPessoa" 
                :items-per-page="5" 
                class="elevation-1">
                <template v-slot:item.cidade="{ item }">
                    {{item.cidade}}/{{item.uf}}
                </template>
                <template v-slot:item.acoes="{ item }">
                    <v-btn :to="idUrlEdit(item)" class="mr-1" small color="yellow">
                        <v-icon>mdi-account-edit</v-icon>
                    </v-btn>
                    <v-btn color="red" small @click="item">
                        <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            headers: [
                {
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Nome', value: 'nome' },
                { text: 'Gênero', value: 'genero' },
                { text: 'Cidade/UF', value: 'cidade' },
                { text: 'E-mail', value: 'email' },
                { text: 'Status', value: 'status' },
                { text: 'Ações', value: 'acoes'},
            ],
            buscaPessoa: [],
        };
    },
    methods: {
        async buscaUsuarios() {
            let resp = await axios.get(`http://localhost:8000/api/usuario`);
            this.buscaPessoa = resp.data.usuarios;
        },

        idUrlEdit(idParams) {
            return `/usuario/edit/${idParams.id}`
        }
    },

    async mounted() {
        await this.buscaUsuarios();
    },
};
</script>

<style scoped>

.v-card__title{
    flex-direction: column
}

.botao{
    margin-left: 10px;
}

</style>