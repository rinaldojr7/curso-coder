const nome = prompt("informe seu nome")
const sobrenome = prompt("informe seu sobrenome")
const anoAtual= 2024
const idade = prompt("informe sua idade")


const anoNascimento = anoAtual-parseFloat(idade)

console.log(`${nome} ${sobrenome}, e eu nasci em: ${anoNascimento}`)

alert(`${nome} ${sobrenome}, e eu nasci em: ${anoNascimento}`)