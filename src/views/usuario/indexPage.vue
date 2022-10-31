<template>
    <div>
        <v-card>
            <v-card-title>
                Usuários
            </v-card-title>
            <v-btn class="botao" :to="link" color="primary">Novo</v-btn>
            <v-data-table 
                :headers="headers" 
                :items="buscaPessoa" 
                :items-per-page="5" 
                class="elevation-1" />
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
            ],
            buscaPessoa: [],
            link:'usuario/novo',
        };
    },
    methods: {
        async buscaUsuario() {
            let resp = await axios.get(`http://localhost:8000/api/usuario`);
            this.buscaPessoa = resp.data.usuarios;
        },
    },

    async mounted() {
        await this.buscaUsuario();
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