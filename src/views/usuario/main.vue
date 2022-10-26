<template>
    <v-container fluid>
        <dados-pessoais />
        <dados-contato />
        <dados-usuario />
        <v-btn @click="saveUsuario()">Salvar</v-btn>
    </v-container>
</template>
<script>
import DadosContato from './dadosContato.vue';
import DadosPessoais from './dadosPessoais.vue';
import DadosUsuario from './dadosUsuario.vue';
import { mapActions } from 'vuex';

export default {
    name: 'CadastroUsuario',
    components: { DadosContato, DadosPessoais, DadosUsuario },
    data: () => ({}),
    methods: {
        ...mapActions('usuario', ['saveUsuario']),
    },
};
</script>

<style scoped></style>
