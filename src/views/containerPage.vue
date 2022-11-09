<template>
    <section>
        <menu-lateral />
        <top-bar />

        <v-main>
            <v-overlay :value="loading">
                <v-progress-circular indeterminate size="64" />
            </v-overlay>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>
    </section>
</template>

<script>
import TopBar from '@/components/layout/TopBar.vue';
import MenuLateral from '@/components/layout/MenuLateral.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ContainerPage',
    components: { TopBar, MenuLateral },
    data: () => ({
        currentItem: 'tab-Web',
    }),

    computed: {
        ...mapGetters('usuario', ['api', 'loading']),
    },

    methods: {
        ...mapActions('usuario', ['fetchUfs', 'fetchCidades', 'saveUsuario']),
    },

    async mounted() {
        await this.fetchUfs();
        await this.fetchCidades();
    },
};
</script>

<style scoped></style>
