<template>
    <v-container fluid>
        <dados-pessoais />
        <dados-contato />
        <dados-usuario :saveOrEdit="isEdit" />
        <v-btn v-if="!isEdit" class="botao" elevation="2" color="primary" @click="salvar()">Salvar </v-btn>
        <v-btn v-else class="botao" elevation="2" color="primary" @click="edicao()">Edição </v-btn>
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

        isEdit() {
            return !!this.$route.params.id
        },
    },

    methods: {
        ...mapActions('usuario', ['saveUsuario', 'editUsuario']),
        ...mapMutations('usuario', ['mostraOverlay', 'paraOverlay', 'reset', 'editarDados']),

        async salvar() {
            this.mostraOverlay();
            const resp = await this.saveUsuario();
            this.popout('Cadastro!', resp.data.message);
            this.paraOverlay();
            this.reset();
        },

        async edicao() {
            this.mostraOverlay();
            const resp = await this.editUsuario(this.idCadastro);
            this.popout('Edição!', resp.data.message);
            this.paraOverlay();
            this.reset();
            
        },

        popout(titulo, texto) {
            this.$swal({
                icon: 'success',
                title: titulo,
                text: texto,
            }).then(() => {
                this.$router.push('/usuario');
                this.reset;
            });
        },
        
        async buscaPessoa() {
            let resp = await axios.get(`http://localhost:8000/api/${this.idCadastro}/usuario`);
            this.editarDados(resp.data.usuario);
        },
    },

    async mounted() {
        if(this.idCadastro){
            await this.buscaPessoa();
        }
    },

    beforeDestroy() {
        this.reset;
    }
};
</script>

<style scoped>
.botao {
    margin: 10px 500px;
    width: 100px;
}
</style>
