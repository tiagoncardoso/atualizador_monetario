<template>
    <section>
        <menu-lateral />
        <top-bar />

        <v-main style="padding: 72px 0 0 72px">
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>
    </section>
</template>

<script>
import TopBar from '@/components/layout/TopBar.vue';
import MenuLateral from '@/components/layout/MenuLateral.vue';

export default {
    name: 'ContainerPage',
    components: { TopBar, MenuLateral },
    data: () => ({
        currentItem: 'tab-Web',
    }),
};
</script>

<style scoped>

</style>