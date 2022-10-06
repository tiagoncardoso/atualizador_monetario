<template>
    <v-app>
        <v-main>
            <dash-board/>
        </v-main>
    </v-app>
</template>

<script>
    import DashBoard from '@/components/dashboard/DashBoard'

    export default {
        name: 'HomeInit',
        components: { DashBoard },
        data: () => ({
        currentItem: 'tab-Web',
    }),
    }
</script>

<style lang="scss" scoped>

</style>