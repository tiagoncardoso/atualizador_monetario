<template>
    <v-row>
        <v-col cols="12">
            <v-menu
                ref="menu1"
                v-model="menu1"
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
                        hint="MM/DD/YYYY"
                        outlined
                        dense
                        append-icon="mdi-calendar"
                        v-bind="attrs"
                        :min="min"
                        :max="max"
                        background-color="white"
                        :rules="[(v) => !!v || 'Campo obrigatório']"
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                    />
                </template>
                <v-date-picker v-model="date" no-title locale="pt-br" :min="min" :max="max" @input="menu1 = false" />
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
        dataEnviada: {
            type: String,
            default: '',
        },
        dataPadrao: {
            type: [Number, String, null],
            default: null,
        },
        min: {
            type: [Number, String],
            default: '',
        },
        max: {
            type: [Number, String],
            default: '',
        },
        checkbox: {
            type: Boolean,
            default: false,
        },
        rules: Boolean,
    },
    data() {
        return {
            date: '',
            dateFormatted: '',
            menu1: false,
        };
    },

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
        dataPadrao(novaData) {
            this.date = novaData;
        },
    },

    methods: {
        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [day, month, year] = date.split('/');
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        },
    },
};
</script>

<style scoped></style>
