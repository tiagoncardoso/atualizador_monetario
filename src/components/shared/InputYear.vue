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
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="dateFormatted"
                        label="Ano"
                        hint="YYYY"
                        outlined
                        dense
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                        background-color="white"
                        color="black"
                    ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                ></v-date-picker>
            </v-menu>
        </v-col>
    </v-row>
</template>

<script>
export default {

    props: {
        label: String,
        anoEnviado: String,
    },

    data() {
        return{
        date: '',
        dateFormatted: '',
        menu1: false,
        }
    },

    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date);
        },
    },

    watch: {
        date(val) {
            this.dateFormatted = this.formatDate(this.date);
        },
        dateFormatted(atualAno) {
            this.$emit('input', atualAno)
        }
    },

    methods: {
        formatDate(date) {
            if (!date) return null;

            const [year] = date.split("-");
            return `${year}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [year] = date.split("/");
            return `${year}`;
        },
    },
};
</script>

<style scoped>
</style>