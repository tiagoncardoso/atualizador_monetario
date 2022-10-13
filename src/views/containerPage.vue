<template>
    <section>
        <menu-lateral />
        <top-bar />

        <v-main >
            <v-container fluid style="padding: 55px 0 0 72px">
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