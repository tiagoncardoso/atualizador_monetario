<template>
    <v-app-bar 
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        dark
        app 
        style="background-color: rgb(20, 90, 171); 
        font-family: arial"
    >
        <v-app-bar-nav-icon> <img src="@/assets/logo.png" width="45" height="45" alt="#" /></v-app-bar-nav-icon>

        <v-spacer>CALCULADORA DE ATUALIZAÇÃO MONETÁRIA</v-spacer>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>
</style>