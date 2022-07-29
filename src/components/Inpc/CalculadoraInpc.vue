<template>
    <div class="principal">
        <h1>Seja bem-vindo</h1>
        <h2>Atualização monetária- INPC</h2>
        <label for="data">Data:</label>
        <input type="text" name="data" placeholder="Digite a data">
        <label for="valor">Valor:</label>
        <input type="text" name="valor" placeholder="Digite o valor">
        <button type="submit">Calcular</button>
        <label for="valorAtual">Valor atualizado:</label>
        <input type="text" name="valorAtual">
    </div>
</template>

<script>
export default {
  name: 'CalculadoraInpc',
}
</script>

<style>
    .principal{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        width: 490px;
        margin: auto;
        margin-top: 100px;
        padding: 5px;
        background-color: rgb(181, 191, 202);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 50px;
    }

</style>
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;