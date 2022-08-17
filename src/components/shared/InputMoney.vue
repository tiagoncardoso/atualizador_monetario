<template>
    <v-row>
        <v-col cols="12">
            <vuetify-money
                v-model="valor"
                :label="label"
                :outlined="outlined"
                :dense="dense"
                clearable
                :backround-color="backgroundColor"
                :color="color"
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
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
        valorPadrao: {
            type: Number,
            default: 0,
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
            if (typeof novoValor !== 'number') {
                this.valor = Number.parseFloat(novoValor);
            } else {
                this.valor = novoValor;
            }
        },
    },
};
</script>

<style scoped></style>
