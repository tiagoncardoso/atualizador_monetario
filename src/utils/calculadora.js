function calcular (params){
    debugger;
    let valorSimulado = params.valor;
    let indiceMes = [];

    let [mes, ano] = params.dataInicialCalculo.split('/');
    let dataInicio = new Date(ano, parseInt(mes) - 1, 1);

    let [mesFim, anoFim] = params.dataFinalCalculo.split('/');
    let dataFim = new Date(anoFim, parseInt(mesFim) - 1, 1);

    if(dataInicio < dataFim){
        while (dataInicio < dataFim){
            let indicesAno = params.indice.filter((filtro) => filtro.ano == dataInicio.getFullYear());


            if (params.proRata == 0){
                indiceMes = indicesAno[0].indices[dataInicio.getMonth()];
            }else{
                indiceMes = indicesAno[0].indices[dataInicio.getMonth()];
            }
            dataInicio.setMonth(dataInicio.getMonth() + 1);

            let total = parseFloat(valorSimulado) * (indiceMes / 100) + parseFloat(valorSimulado);
            valorSimulado = total;
        }

        return valorSimulado
    }else{
        return '13'
    }
};

export { calcular };