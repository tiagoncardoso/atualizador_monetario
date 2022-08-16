<template>
    <div>
        <v-row>
            <v-col cols='12'>
                 <vuetify-money
                    :label='label'
                    dense
                    :background-color="background"
                    counter
                    v-model="valorPadrao"
                    class="mt-5"
                  />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import { Money } from "v-money";

    export default {
        name: 'InputMoney',
        props: {
            label: String,
            background: String,
        },

        components: {
            Money,
        },
        data(){
            return{
                valorPadrao: 0,
                options: {
                    locale: "pt-BR",
                    prefix: "R$",
                    suffix: "",
                    length: 11,
                    precision: 2,
                },
            }
        },
        watch: {
            valorPadrao(novoValor) {
                this.$emit('input', novoValor);
            } 
        },
    }
</script>

<style lang="sass" scoped>

</style>