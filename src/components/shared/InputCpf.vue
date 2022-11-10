<template>
    <v-row>
        <v-col>
            <v-text-field
                v-model="parsedDate"
                v-mask="'###.###.###-##'"
                :label="label"
                :outlined="outlined"
                :dense="dense"
                :rules="[(v) => !!v || 'Campo Obrigatório', (v) => v.length <= 14]"
                :counter="counter"
                :placeholder="placeholder"
                :persistent-placeholder="persistentPlaceholder"
            />
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'InputCpf',

    model:{
        prop: 'inputVal',
        event: 'change',
    },

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
        placeholder: {
            type: String,
            default: '',
        },
        persistentPlaceholder: {
            type: Boolean,
            default: false,
        },
        inputVal: {
            type: String
        },
    },

    data() {
        return {
            cpf: '',
        };
    },

    computed: {
        parsedDate: {
            get(){
                return this.inputVal;
            },
            set(value){
                this.$emit('change', value);
            },
        },
    },

    watch: {
        cpf(novoCpf) {
            this.$emit('input', novoCpf);
        },
    },
};
</script>

<style scoped></style>
