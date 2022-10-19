<template>
    <v-row>
        <v-col>
            <v-text-field
                v-model="cpf"
                v-mask="'###.###.###-##'"
                :label="label"
                :outlined="outlined"
                :dense="dense"
                :rules="[(v) => !!v || 'O CPF é obrigatório', (v) => v.length <= 14]"
                :counter="counter"
            />
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'InputCpf',
    props: {
        label: {
            type: String,
            default: 'Cpf',
        },
        outlined: Boolean,
        dense: Boolean,
        rules: Boolean,
        counter: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            cpf: '',
        };
    },
    watch: {
        cpf(novoCpf) {
            this.$emit('input', novoCpf);
        },
    },
};
</script>

<style scoped></style>
