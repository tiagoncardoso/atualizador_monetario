import { converteDataBrParaUs } from './date.js';

function calcular(params) {
    let valorSimulado = params.valor;
    let indiceMes = [];

    let dataInicio = converteDataBrParaUs(params.dataInicialCalculo);
    let dataFim = converteDataBrParaUs(params.dataFinalCalculo);

    if (dataInicio < dataFim) {
        while (dataInicio < dataFim) {
            let indicesAno = params.indice.filter((filtro) => filtro.ano == dataInicio.getFullYear());

            if (params.proRata == 0) {
                indiceMes = indicesAno[0].indices[dataInicio.getMonth()];
            } else {
                indiceMes = indicesAno[0].indices[dataInicio.getMonth()];
            }
            dataInicio.setMonth(dataInicio.getMonth() + 1);

            let total = parseFloat(valorSimulado) * (indiceMes / 100) + parseFloat(valorSimulado);
            valorSimulado = total;
        }

        return valorSimulado;
    } else {
        return '13';
    }
}

export { calcular };
