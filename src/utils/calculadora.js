function calcular (params){
    let valorSimulado = params.valor;

    let [mes, ano] = params.dataInicialCalculo.split('/');
    let dataInicio = new Date(ano, parseInt(mes) - 1, 1);

    let [mesFim, anoFim] = params.dataFinalCalculo.split('/');
    let dataFim = new Date(anoFim, parseInt(mesFim) - 1, 1);

    if(dataInicio < dataFim){
        while (dataInicio < dataFim){
            let indicesAno = params.indice.filter((filtro) => filtro.ano == dataInicio.getFullYear());

            let indiceMes = indicesAno[0].indices[dataInicio.getMonth()];
            dataInicio.setMonth(dataInicio.getMonth() + 1);

            let total = parseFloat(valorSimulado) * (indiceMes / 100) + parseFloat(valorSimulado);
            valorSimulado = total;
        }

        return valorSimulado
    }else{
        return ''
    }
};

export { calcular };