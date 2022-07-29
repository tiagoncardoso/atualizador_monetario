<template>
    <div class="app">
        <h1>Calculadora IPCA </h1>
        <div class="input">
            <label for="data">Data :</label>
            <input type="text">
            <label for="valor"> Valor :</label>
            <input type="text">
            <button class="corButton">Calcular</button>
        </div> 
        <div class="result">
            <label for="result">Resultado   </label>
            <input type="text">
            <p></p>
        </div>
    </div>
</template>


<script>
export default{
    name: "CalculadoraIpca",
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