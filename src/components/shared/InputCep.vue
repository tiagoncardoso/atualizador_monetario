<template>
    <v-row>
        <v-col>
            <v-text-field
                v-model="parsedCep"
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

    model: {
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
        }
    },
    data() {
        return {
            cep: '',
            regra: {
                cepi: [(v) => !!v || 'Campo Obrigatório'],
            },
        };
    },

    computed: {
        parsedCep: {
            get() {
                return this.inputVal;
            },
            
            set(value) {
                this.$emit('change', value);
            }
        }
    },

    watch: {
        cep(novoCep) {
            this.$emit('input', novoCep);
        },
    },
};
</script>

<style scoped></style>
