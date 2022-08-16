<template>
  <v-row>
    <v-col>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateFormatted"
            :label="label"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" type="month" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-spacer></v-spacer>
    </v-col>
  </v-row>
</template>

<script>
<<<<<<< HEAD
    export default {
        name: 'InputMonth',

        props:{
            label: String,
            mesInicial: String,
        },
    data() {
        return{
            date: '',
            dateFormatted: '',
            menu1: false,
        }
=======
export default {
    name: "InputDate",
    props: {
        label: String,
        outlined: Boolean,
        dense: Boolean,
        backgroundColor: String,
        color: String,
>>>>>>> c5e74ff318ce8079a1aaaf6e23156ad3133f95e3
    },
    data: () => ({
        date: "",
        menu: false,
        dateFormatted: "",
        modal: false,
    }),
    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date);
        },
    },

    watch: {
        date(val) {
            this.dateFormatted = this.formatDate(this.date);
        },

        dateFormatted(novaData) {
            this.$emit("input", novaData);
        },
    },

    methods: {
        formatDate(date) {
            if (!date) return null;

<<<<<<< HEAD
        const [year, month, day] = date.split('-')
        return month
      },
      parseDate (date) {
        if (!date) return null
=======
            const [year, month] = date.split("-");
            return `${month}/${year}`;
        },
        parseDate(date) {
            if (!date) return null;
>>>>>>> c5e74ff318ce8079a1aaaf6e23156ad3133f95e3

            const [month, year] = date.split("/");
            return `${year}-${month.padStart(2, "0")}`;
        },
    },
<<<<<<< HEAD
  }
=======
};
>>>>>>> c5e74ff318ce8079a1aaaf6e23156ad3133f95e3
</script>

<style scoped>
</style>