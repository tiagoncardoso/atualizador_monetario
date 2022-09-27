<template>
    <v-app>
        <v-main>
            <login-secundary/>
        </v-main>
    </v-app>
</template>

<script>
import loginSecundary from './components/loginb/loginSecundary.vue';

export default {
    name: 'App',
    components: { loginSecundary },
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
