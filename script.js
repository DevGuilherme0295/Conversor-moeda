
const Valor = document.querySelector('#valor');
const De = document.querySelector('#de');
const Para = document.querySelector('#para');
const Resultado = document.querySelector('#resultado');
const Conversor = document.querySelector('#conversor');

const taxas = {
    brl: {brl: 1, usd: 0.18, eur: 0.16},
    usd: {brl: 5.47, usd: 1, eur: 0.86},
    eur: {brl: 6.37, usd: 1.16, eur: 1}
};

Conversor.addEventListener('click', () => {
    const valorInserido = parseFloat(Valor.value);
    const valorDe = De.value;
    const valorPara = Para.value;

    if(isNaN(valorInserido) || valorInserido <= 0){
        Resultado.textContent = 'Digite um valor válido!';
        return;
    }
    const taxa = taxas[valorDe][valorPara];

    const conversao = valorInserido * taxa;

    Resultado.textContent = `${valorDe.toUpperCase()} ${valorInserido} = ${valorPara.toUpperCase()} ${conversao.toFixed(2)}`;
    

});