<template>
    <v-app>
        <v-main>
            <inpc-form />
        </v-main>
    </v-app>
</template>

<script>
import InpcForm from '@/components/indices/InpcForm.vue';

export default {
    name: 'IndicesAtual',
    components: { InpcForm },
    data: () => ({
        currentItem: 'tab-Web',
    }),
};
</script>

<style scoped></style>
