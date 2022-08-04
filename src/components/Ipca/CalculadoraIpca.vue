<template>
    <div class="app">
        <h1>Calculadora IPCA </h1>
        <div class="input">
            <label for="data">Data :</label>
            <input type="text" v-model="data">
            <label for="valor"> Valor :</label>
            <input type="text" v-model="test2">
            <button class="corButton" @click="calculo()">Calcular</button>
        </div> 
        <div class="result">
            <label for="result">Resultado </label>
            <input type="text" v-model="result">
        </div>
    </div>
</template>


<script>

import {indices} from "./Ipca"

export default{
    name: "CalculadoraIpca",
    data() {
        return {
            data: '',
            test2: 0,
            result: 0,
            pegando: [],
        }
    },
    computed: {
        indices() {
            return indices;
        }
    },

    methods: {
        calculo(){
            const digitos = this.data.split('/')
            const age = digitos[2]
            const mounth = digitos [1]
            const laco = mounth - 1

            if(mounth >= 1 && mounth <= 12){
                if(age == 1994){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["1994"][laco]
                      //  total = this.indices["1994"][laco]
                      //  this.result = total * 100
                    }
                }else if (age == 1995){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["1995"][laco]
                    }
                }else if(age == 1996){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["1996"][laco]
                    }
                }else if(age == 1997){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["1997"][laco]
                    }
                }else if(age == 1998){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["1998"][laco]
                    }
                }else if(age == 1999){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["1999"][laco]
                    }
                }else if(age == 2000){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2000"][laco]
                    }
                }else if(age == 2001){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2001"][laco]
                    }
                }else if(age == 2002){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2002"][laco]
                    }
                }else if(age == 2003){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2003"][laco]
                    }
                }else if( age == 2004){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2004"][laco]
                    }
                }else if(age == 2005){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2005"][laco]
                    }
                }else if(age == 2006){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2006"][laco]
                    }
                }else if(age == 2007){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2007"][laco]
                    }
                }else if(age == 2008){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2008"][laco]
                    }
                }else if(age == 2009){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2009"][laco]
                    }
                }else if(age == 2010){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2010"][laco]
                    }
                }else if(age == 2011){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2011"][laco]
                    }
                }else if(age == 2012){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2012"][laco]
                    }
                }else if(age == 2013){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2013"][laco]
                    }
                }else if(age == 2014){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2014"][laco]
                    }
                }else if(age == 2015){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2015"][laco]
                    }
                }else if(age == 2016){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2016"][laco]
                    }
                }else if(age == 2017){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2017"][laco]
                    }
                }else if(age == 2018){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2018"][laco]
                    }
                }else if(age == 2019){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2019"][laco]
                    }
                }else if(age == 2020){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2020"][laco]
                    }
                }else if(age == 2021){
                    for(laco; laco != parseFloat(mounth); laco++){
                        this.result = this.indices["2021"][laco]
                    }
                }else if(age == 2022){
                    if(mounth >= 1 && mounth <= 6){
                        for(laco; laco != parseFloat(mounth); laco++){
                            this.result = this.indices["2022"][laco]
                        }
                    }else{
                        this.result = "Mês incorreto!"
                    }
                }else{
                    this.result = "Ano incorreto"
                }
            }else{
                this.result = "Mês incorreto!"
            }
        }
    }
}

</script>


<style>
    .app{
        background: rgb(54, 50, 50); 
    }

    h1{
        background: black;
        color: white;
        text-align: center;
    }

    .input {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: white;
        margin-top: 60px;
    }

    .corButton{
        background: blue;
        color: white;
    }

    .result{
        padding-bottom: 20px;
        text-align:     center;
        margin-top: 20px;
        color: white;
    }
</style>