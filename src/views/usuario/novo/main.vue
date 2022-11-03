<template>
    <v-container fluid>
        <dados-pessoais :dados='dadosPessoa' />
        <dados-contato :dados='dadosPessoa' />
        <dados-usuario :dados='dadosPessoa' />
        <v-btn class="botao" elevation="2" color="primary" @click="salvar()">Salvar </v-btn>
    </v-container>
</template>
<script>
import DadosContato from './dadosContato.vue';
import DadosPessoais from './dadosPessoais.vue';
import DadosUsuario from './dadosUsuario.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';
import axios from 'axios';

export default {
    name: 'CadastroUsuario',
    components: { DadosContato, DadosPessoais, DadosUsuario },

    data() {
        return {
            dadosPessoa:[],
        };
    },

    computed: {
        ...mapGetters('usuario', ['dadosPessoais']),
        idCadastro() {
            return parseInt(this.$route.params.id);
        },
    },

    methods: {
        ...mapActions('usuario', ['saveUsuario']),
        ...mapMutations('usuario', ['mostraOverlay', 'paraOverlay', 'reset']),

        async salvar() {
            this.mostraOverlay();
            await this.saveUsuario();
            this.paraOverlay();
            this.$swal({
                icon: 'success',
                title: 'Cadastro de usuário',
                text: 'Cadastro realizado com sucesso!',
            });
            this.reset();
        },

        async buscaPessoa() {
            debugger
            let resp = await axios.get(`http://localhost:8000/api/${this.idCadastro}/usuario`);
            this.dadosPessoa = resp.data.usuario;
            //this. = await axios.get(`http://localhost:8000/api/usuario/${this.idCadastro}`);
         
        },
    },

    async mounted() {
        await this.buscaPessoa();
    },
};
</script>

<style scoped>
.botao {
    margin: 10px 500px;
    width: 100px;
}
</style>
