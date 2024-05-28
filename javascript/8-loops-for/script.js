//for (comum)

// inicialização ; condição ; finalização
for (let idade = 1; idade < 18; idade++) {
  console.log(`Menor de idade. ${idade} anos`);
}

console.log("-".repeat(15));

for (executou = false; !executou; executou = true) {
  console.log("Executou!");
}

console.log("-".repeat(15));

for (nome = "Gustavo", idade = 15; idade < 18; idade++) {
  console.log(`O nome ${nome} é menor de idade pois tem ${idade} anos`);
}

console.log("-".repeat(15));

for (i = 10; i <= 20; i++) {
  console.log(`Valor de i: ${i}`);

  if (i === 15) {
    break;
  }
}

console.log("-".repeat(15));

let nomes = [
  "Pedro",
  "Paulo",
  "Thiago",
  "Matias",
  "João",
  "Maria",
  "Ana",
  "Célia",
];
console.log("Nome: " + nomes[0]);
console.log("Nome: " + nomes[2]);
console.log("Nome: " + nomes[4]);
console.log("Total de nomes: " + nomes.length);

console.log("-".repeat(15));
for (i = 0; i < nomes.length; i++) {
  console.log("Nome: " + nomes[i]);
}
