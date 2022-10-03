<template>
    <v-app>
        <v-main>
            <login-Primary />
        </v-main>
    </v-app>
</template>

<script>
import loginPrimary from '@/components/login/loginPrimary.vue';

export default {
    name: 'LoginPage',
    components: { loginPrimary },
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
