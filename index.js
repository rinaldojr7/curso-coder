const numero = parseInt(prompt(`Digite o preço: `));

const soma = (numero, icms) => {
    return numero + icms;
};

const calcularICMS = (preco) => {
    return preco * 0.07;
};

const somaICMS = (preco, icms) => {
    return preco + icms;
};

const icms = calcularICMS(numero);
const precoICMS = somaICMS(numero, icms);
const resultado = precoICMS;
alert(resultado);
