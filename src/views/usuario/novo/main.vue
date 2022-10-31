<template>
    <v-container fluid>
        <dados-pessoais />
        <dados-contato />
        <dados-usuario />
        <v-btn class="botao" elevation="2" color="primary" @click="salvar()">Salvar </v-btn>
    </v-container>
</template>
<script>
import DadosContato from './dadosContato.vue';
import DadosPessoais from './dadosPessoais.vue';
import DadosUsuario from './dadosUsuario.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    name: 'CadastroUsuario',
    components: { DadosContato, DadosPessoais, DadosUsuario },
    data: () => ({
    }),

    computed: {
        ...mapGetters('usuario', ['dadosPessoais']),
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
    },
};
</script>

<style scoped>

.botao{
    margin: 10px 500px;
    width: 100px;
}

</style>
