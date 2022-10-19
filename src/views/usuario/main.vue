<template>
    <v-container fluid>
        <dados-pessoais />
        <dados-contato />
        <dados-usuario />
    </v-container>
</template>
<script>
import DadosContato from './dadosContato.vue';
import DadosPessoais from './dadosPessoais.vue';
import DadosUsuario from './dadosUsuario.vue';

export default {
    name: 'CadastroUsuario',
    components: { DadosContato, DadosPessoais, DadosUsuario },
    data: () => ({}),
};
</script>

<style scoped></style>
