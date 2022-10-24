<template>
    <section>
        <menu-lateral />
        <top-bar />

        <v-main>
            <v-container fluid style="padding: 40px 90px 0px 0px">
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
        ...mapGetters('usuario', ['api']),
    },

    methods: {
        ...mapActions('usuario', ['fetchUfs']),

        ...mapActions('usuario', ['fetchCity']),
    },

    async mounted() {
        await this.fetchUfs();
        await this.fetchCity();
    }
};
</script>

<style scoped></style>
