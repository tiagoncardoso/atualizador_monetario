<template>
    <v-navigation-drawer
        app
        floating 
        permanent 
        expand-on-hover
        :clipped="$vuetify.breakpoint.lgAndUp"
        width="230"
        style="font-family: arial"
        class="pa-1"
    >
        <v-list>
            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="text-h6"> Sandra Adams </v-list-item-title>
                    <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                    <hr />
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-list nav dense>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-group :value="true" no-action sub-group>
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>Calculadora</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item v-for="(c, i) in calc" :key="i" link>
                    <v-list-item-title> {{ c.nome }}</v-list-item-title>

                    <v-list-item-icon>
                        <v-icon> {{ c.icone }} </v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-group>
            <v-list-group :value="true" no-action sub-group>
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>Administração</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item v-for="(admin, i) in admins" :key="i" link>
                    <v-list-item-title> {{ admin.nome }}</v-list-item-title>

                    <v-list-item-icon>
                        <v-icon> {{ admin.icone }} </v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        calc: [
            { nome: 'IPCA (IBGE)', icone: 'mdi-calculator' },
            { nome: 'INPC (IBGE)', icone: 'mdi-calculator' },
        ],
        admins: [
            { nome: 'Usuários', icone: 'mdi-account-multiple-outline' },
            { nome: 'Índices', icone: 'mdi-list-box' },
        ],
    }),
};
</script>

<style scoped>
</style>