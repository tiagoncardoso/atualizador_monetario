<template>
    <v-container fluid>
        <dados-pessoais />
        <dados-contato />
        <dados-usuario />
        <v-btn :to="link" class="botao" elevation="2" color="primary" @click="salvar()">salvar</v-btn>
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
    data(){
        return{
            link: '/usuario',
        }
    },

    computed: {
        ...mapGetters('usuario', ['dadosPessoais']),

        idCadastro() {
            return this.$route.params.id;
        }
    },

    methods: {
        ...mapActions('usuario', ['saveUsuario']),
        ...mapMutations('usuario', ['mostraOverlay', 'paraOverlay', 'reset', 'setDadosPessoais']),

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

        async buscaDados() {
            let resp = await axios.get(`http://localhost:8000/api/${this.idCadastro}/usuario`);
            this.setDadosPessoais(resp.data.usuario);
        }
    },
    
    async mounted() {
        await this.buscaDados();
    }
};
</script>

<style scoped>

.botao{
    margin: 10px 500px;
    width: 100px;
}

</style>
