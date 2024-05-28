if (6 !== 6) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

const idade = prompt("Informe sua idade: ");

if (idade >= 18) {
  alert("Você é maior de idade");
} else if (idade > 12) {
  alert("Você é menor de idade");
} else if (idade > 4) {
  alert("Você é criança");
}
