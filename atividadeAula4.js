function inserirNumeros() {
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));
    return [numero1, numero2];
}

function verificarMultiplos(numero1, numero2) {
    return numero1 % numero2 === 0 || numero2 % numero1 === 0;
}

function mostrarResultado(resultado) {
    if (resultado) {
        alert("Um número é múltiplo do outro.");
    } else {
        alert("Os números não são múltiplos.");
    }
}

let [num1, num2] = inserirNumeros();
let resultado = verificarMultiplos(num1, num2);
mostrarResultado(resultado);
