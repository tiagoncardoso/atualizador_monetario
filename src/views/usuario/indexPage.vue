<template>
    <v-data-table
        :headers="headers"
        :items="buscaPessoa"
        :items-per-page="5"
        class="elevation-1"
    >André</v-data-table>
</template>

<script>
    import { mapGetters } from "vuex";
    import axios from 'axios';

    export default {

        computed: {
            ...mapGetters('usuario', ['dadosPessoais']),
        },

        data() {
            return{
                headers: [
                    {
                        text: 'Nome',
                        align: 'start',
                        sortable: false,
                        value: 'nome',
                    },
                    { text: 'Gênero', value: 'genero' },
                    { text: 'Cidade', value: 'fat' },
                    { text: 'Email', value: 'email' },
                    { text: 'Status', value: 'status' },
                ],
                buscaPessoa: [],
            }
        },

        methods: {
            async apiBuscaPessoa() {
                let resposta = await axios.get('http://localhost:8000/api/usuario');
                this.buscaPessoa = resposta.data.usuarios;
            },
        },

        async mounted() {
            await this.apiBuscaPessoa();
        },
    }
</script>

<style scoped>

</style>