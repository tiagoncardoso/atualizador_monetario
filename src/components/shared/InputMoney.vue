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
                :result="result"
            />
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'InputMoney',
    props:{
        label: String,
        outlined: Boolean,
        dense: Boolean,
        backgroundColor: String,
        color: String,
        options: String,
        result: String,
    },
    data(){
        return{
            valor: 0,
        }
    },
    watch: {
        valor(novoValor) {
            this.$emit("input", novoValor);
        },
    },
};
</script>

<style scoped>
</style>