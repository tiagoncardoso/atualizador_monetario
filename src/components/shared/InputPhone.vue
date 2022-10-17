<template>
    <v-row>
        <v-col>
            <v-text-field
                v-model="fone"
                v-mask="'(###) #####-####'"
                :label="label"
                :outlined="outlined"
                :dense="dense"
                :persistentPlaceholder="persistentPlaceholder"
                :placeholder="placeholder"
                :rules="regra.phone"
            />
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'InputPhone',
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
                fone: '',
                regra: {
                    phone: [(v) => !!v || "Campo Obrigatório"]
                }
            }
        },
        watch: {
            fone(v){
                this.$emit('input', v);
            }
        }
    }
</script>

<style scoped>

</style>