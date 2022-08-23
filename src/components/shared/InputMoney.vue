<template>
    <v-row>
        <v-col cols="12">
            <vuetify-money
                v-model="valor"
                :label="label"
                :outlined="outlined"
                :dense="dense"
                :clearable="!clearable"
                :background-color="backgroundColor"
                :color="color"
                :readonly="readonly"
            />
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'InputMoney',
    props: {
        label: {
            type: String,
            default: 'Valor',
        },
        outlined: Boolean,
        dense: Boolean,
        backgroundColor: {
            type: String,
            default: 'white',
        },
        color: {
            type: String,
            default: '',
        },
        valorPadrao: {
            type: [Number, String],
            default: 0,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            valor: 0,
        };
    },
    watch: {
        valor(novoValor) {
            this.$emit('input', novoValor);
        },
        valorPadrao(novoValor) {
            this.valor = Number.parseFloat(novoValor);
        },
    },
};
</script>

<style scoped></style>
