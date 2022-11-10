<template>
    <v-row>
        <v-col>
            <v-text-field
                v-model="parsedDate"
                v-mask="'(###) #####-####'"
                :label="label"
                :outlined="outlined"
                :dense="dense"
                :persistent-placeholder="persistentPlaceholder"
                :placeholder="placeholder"
                :rules="regra.phone"
            />
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'InputPhone',

    model:{
        prop: 'inputVal',
        event: 'change',
    },

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
        inputVal: {
            type: String,
        },
    },

    data() {
        return {
            fone: '',
            regra: {
                phone: [(v) => !!v || 'Campo Obrigatório'],
            },
        };
    },

    computed:{
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
        fone(v) {
            this.$emit('input', v);
        },
    },
};
</script>

<style scoped></style>
