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
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    name: 'ContainerPage',
    components: { TopBar, MenuLateral },
    data: () => ({
        currentItem: 'tab-Web',
        estado: '',
    }),

    computed: {
        ...mapGetters('usuario', ['api']),
    },

    methods: {
        async buscaUf() {
            let valor = await axios.get('http://localhost:8000/api/estado');
            this.estado = valor.data.estados;
        },
        formataUf() {
            let laco = []
            for(let c = 0; c < this.estado.length; c++){
                laco[c] = this.estado[c].uf
            }
            return laco;
        }
    },

    async mounted() {
        await this.buscaUf();
        this.api.estado = this.formataUf();
    }
};
</script>

<style scoped></style>
