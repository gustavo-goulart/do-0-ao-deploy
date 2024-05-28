//OBJETO
let pessoa = {
  nome: "Gustavo",
  idade: 42,
  sexo: "M",
  altura: 1.87,
  peso: 120,
};

console.log(pessoa.nome);
console.log(pessoa.idade);

let pessoas = [
  //array
  {
    //objeto
    nome: "Gustavo",
    idade: 42,
    sexo: "M",
    altura: 1.87,
    peso: 120,
  },

  {
    nome: "Pedro",
    idade: 28,
    sexo: "M",
    altura: 1.78,
    peso: 75,
  },
];

console.log(pessoas[0].nome);

//array de nomes
let nomes = ["Gustavo", "Pedro", "Tiago"];

//verificar o tipo real do dado
console.log(nomes.constructor.name);
console.log(pessoa.constructor.name);
console.log(pessoas.constructor.name);

let usuarios = function () {
  return [1, 2, 3];
};

let clientes = () => {
  return [1, 2, 3];
};

let clientesNovos = () => {
  return [1, 2, 3];
};

//executando a função
console.log(usuarios());
console.log(clientes());
console.log(clientesNovos());
