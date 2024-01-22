class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  dadosHeroi() {
    return `Esses são os dados do seu Herói: \n
    Nome: ${this.nome}\n
    Idade: ${this.idade}\n
    Tipo: ${this.tipo}
    `;
  }

  atacar() {
    if (this.tipo === "Mago") {
      return `Magia`;
    } else if (this.tipo === "Guerreiro") {
      return `Espada`;
    } else if (this.tipo === "Monge") {
      return `Artes Marciais`;
    } else if (this.tipo === "Ninja") {
      return `Shuriken`;
    }
  }
}

alert("Bem vindo ao seletor de Heróis");

let nome = prompt("Qual o nome do seu Herói:");
let idade = prompt("Qual a idade do seu Herói:");
let tipo;

while (true) {
  tipo = prompt(`Qual a sua classe: \n
      - Mago \n
      - Guerreiro \n
      - Monge \n
      - Ninja \n
  `);

  if (["Mago", "Guerreiro", "Monge", "Ninja"].includes(tipo)) {
    break;
  } else {
    alert("Opção inválida. Por favor, escolha uma das opções fornecidas.");
  }
}

let novoHeroi = new heroi(nome, idade, tipo);

alert(`Você escolheu a classe: ${tipo}`);
alert(novoHeroi.dadosHeroi());
alert("O tipo de ataque do seu Herói é:  " + novoHeroi.atacar());
