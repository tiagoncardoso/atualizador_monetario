<template>
    <v-container fluid>
        <dados-pessoais/>
        <dados-contato/>
    </v-container>
</template>
<script>
import DadosContato from './dadosContato.vue';
import DadosPessoais from './dadosPessoais.vue';

export default {
    name: 'CadastroUsuario',
    components: {DadosContato, DadosPessoais },
    data: () => ({
    }),
}
</script>

<style scoped>

</style>