<template>
    <v-row>
        <v-col>
            <v-text-field
                v-model="cep"
                v-mask="'#####-###'"
                :label="label"
                :outlined="outlined"
                :dense="dense"
                :persistent-placeholder="persistentPlaceholder"
                :placeholder="placeholder"
                :rules="regra.cepi"
            />
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'InputCep',
    props: {
        label: {
            type: String,
            default: '',
        },
        outlined: {
            type: Boolean,
            default: true,
        },
        dense: {
            type: Boolean,
            default: true,
        },
        persistentPlaceholder: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            cep: '',
            regra: {
                cepi: [(v) => !!v || 'Campo Obrigatório'],
            },
        };
    },
    watch: {
        cep(novoCep) {
            this.$emit('input', novoCep);
        },
    },
};
</script>

<style scoped></style>
