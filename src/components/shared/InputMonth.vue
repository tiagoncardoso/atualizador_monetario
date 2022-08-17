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
    name: 'InputDate',
    props: {
        label: {
            type: String,
            default: 'Data',
        },
        outlined: Boolean,
        dense: Boolean,
        backgroundColor: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: 'black',
        },
    },
    data: () => ({
        date: '',
        menu: false,
        dateFormatted: '',
        modal: false,
    }),
    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date);
        },
    },

    watch: {
        date() {
            this.dateFormatted = this.formatDate(this.date);
        },

        dateFormatted(novaData) {
            this.$emit('input', novaData);
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
            return `${year}-${month.padStart(2, '0')}`;
        },
    },
};
</script>

<style scoped></style>
