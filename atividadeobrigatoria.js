class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.amigos = [];
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }

       adicionarAmigo(amigo) {
        this.amigos.push(amigo);
        console.log(`${amigo} é amigo de ${this.nome}.`);
    }

    listarAmigos() {
        console.log(`${this.nome} tem os seguintes amigos: ${this.amigos.join(', ')}`);
    }
}

const pessoa1 = new Pessoa('Rinaldo', 27);

function interagirComPessoa() {
      pessoa1.apresentar();

     pessoa1.adicionarAmigo('Rebeca');
    pessoa1.adicionarAmigo('Maria');

       pessoa1.listarAmigos();
}


interagirComPessoa();