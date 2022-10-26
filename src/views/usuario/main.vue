<template>
    <v-container fluid>
        <dados-pessoais />
        <dados-contato />
        <dados-usuario />
        <v-btn 
            class="botao"
            elevation="2"
            color="primary"
            @click="saveUsuario()"
        >Salvar</v-btn>
    </v-container>
</template>
<script>
import { mapActions } from 'vuex';
import DadosContato from './dadosContato.vue';
import DadosPessoais from './dadosPessoais.vue';
import DadosUsuario from './dadosUsuario.vue';

export default {
    name: 'CadastroUsuario',
    components: { DadosContato, DadosPessoais, DadosUsuario },
    data: () => ({}),
    methods: {
        ...mapActions('usuario', ['saveUsuario'])
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
