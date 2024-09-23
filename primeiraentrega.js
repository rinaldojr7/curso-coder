function receberNumeros() {
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));
    let operacao = prompt("Digite a operação (soma, subtração, multiplicação, divisão):");
    
    return { numero1, numero2, operacao };
}

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Não é possivel dividir por zero";
    }
    return a / b;
}

// Função principal do simulador
function calculadoraSimples() {
    let { numero1, numero2, operacao } = receberNumeros();
    let resultado;

    switch (operacao) {
        case 'soma':
            resultado = soma(numero1, numero2);
            break;
        case 'subtração':
            resultado = subtracao(numero1, numero2);
            break;
        case 'multiplicação':
            resultado = multiplicacao(numero1, numero2);
            break;
        case 'divisão':
            resultado = divisao(numero1, numero2);
            break;
        default:
            resultado = "Operação inválida!";
    }

    alert("O resultado é: " + resultado);
}

calculadoraSimples();
