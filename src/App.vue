<template>
    <v-app>
        <v-main>
            <login-primario />
        </v-main>
    </v-app>
</template>

<script>
import loginPrimario from './components/logina/loginPrimario.vue';

export default {
    name: 'App',
    components: { loginPrimario},
    data: () => ({
        currentItem: 'tab-Web',
    }),
};
</script>

<style scoped>
div.v-toolbar__title {
    margin: auto;
    font-size: 25px;
}
</style>
