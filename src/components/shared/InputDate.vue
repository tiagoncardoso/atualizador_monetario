<template>
<<<<<<< HEAD
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
            :label="label"
            hint="MM/DD/YYYY format"
            persistent-hint
            prepend-icon="mdi-calendar"
            v-bind="attrs"
            @blur="date = parseDate(dateFormatted)"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          @input="menu1 = false"
          locale="pt-br"
        ></v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
    export default {
        name: 'InputMonth',

        props:{
            label: String,
            dataEnviada: String,
        },
    data() {
        return{
            date: '',
            dateFormatted: '',
            menu1: false,
        }
    },

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
      
      dateFormatted(novaData) {
        this.$emit('input', novaData)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  }
=======
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
                        label="Data"
                        hint="MM/DD/YYYY"
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
                    locale="pt-br"
                ></v-date-picker>
            </v-menu>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "InputDate",

    props: {
        label: String,
        dataEnviada: String,
    },
    data() {
        return {
            date: "",
            dateFormatted: "",
            menu1: false,
        };
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

        dateFormatted(novaData) {
            this.$emit("input", novaData);
        },
    },

    methods: {
        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split("-");
            return `${day}/${month}/${year}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [day, month, year] = date.split("/");
            return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        },
    },
};
>>>>>>> c5e74ff318ce8079a1aaaf6e23156ad3133f95e3
</script>

<style scoped>
</style>