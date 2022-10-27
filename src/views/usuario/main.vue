<template>
    <v-container fluid>
        <dados-pessoais />
        <dados-contato />
        <dados-usuario />
        <v-btn elevation="2" color="primary" @click="salvar()">Salvar </v-btn>
    </v-container>
</template>
<script>
import DadosContato from './dadosContato.vue';
import DadosPessoais from './dadosPessoais.vue';
import DadosUsuario from './dadosUsuario.vue';
import { mapActions, mapMutations } from 'vuex';

export default {
    name: 'CadastroUsuario',
    components: { DadosContato, DadosPessoais, DadosUsuario },
    data: () => ({
    }),
    methods: {
        ...mapActions('usuario', ['saveUsuario']),
        ...mapMutations('usuario', ['mostraOverlay', 'paraOverlay']),

        async salvar() {
            this.mostraOverlay();
            await this.saveUsuario();
            this.paraOverlay();
        },
    },
};
</script>

<style scoped>

.botao{
    text-align: center !important;
    margin-top: 10px;
    justify-content: center !important;
}
</style>
