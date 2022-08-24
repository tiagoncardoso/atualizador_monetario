<template>
    <v-row>
        <v-col>
            <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
            >
                <template #activator="{ on, attrs }">
                    <v-text-field
                        v-model="dateFormatted"
                        :label="label"
                        hint="MM/YYYY"
                        prepend-icon="mdi-calendar"
                        readonly
                        :outlined="outlined"
                        :dense="dense"
                        :background-color="backgroundColor"
                        :color="color"
                        v-bind="attrs"
                        v-on="on"
                    />
                </template>
                <v-date-picker
                    v-model="date"
                    type="month"
                    no-title
                    scrollable
                    locale="pt-br"
                    @input="menu = false"
                    @blur="$refs.menu.save(date)"
                />
            </v-menu>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'InputMonth',
    props: {
        label: {
            type: String,
            default: 'Data',
        },
        outlined: Boolean,
        dense: Boolean,
        backgroundColor: {
            type: String,
            default: 'white',
        },
        color: {
            type: String,
            default: 'black',
        },
        dataPadrao: {
            type: [Number, String],
            default: '',
        },
    },
    data: () => ({
        date: '',
        menu: false,
        dateFormatted: '',
        modal: false,
    }),

    watch: {
        date(novaData) {
            this.dateFormatted = this.formatDate(novaData);
            
        },

        dateFormatted(novaData) {
            this.$emit('input', novaData);
        },

        dataPadrao(novaData) {
            this.date = novaData;
        },
    },

    methods: {
        formatDate(date) {
            if (!date) return null;

            const [year, month] = date.split('-');
            return `${month}/${year}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [month, year] = date.split('/');
            return `${month.padStart(2, '0')}-${year}`;
        },
    },
};
</script>

<style scoped></style>
