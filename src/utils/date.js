function converteDataBrParaUs(strData) {
    let [mes, ano] = strData.split('/');
    return new Date(ano, parseInt(mes) - 1, 1);
}

export {
    converteDataBrParaUs
};