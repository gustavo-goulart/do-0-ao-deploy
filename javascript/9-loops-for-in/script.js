let pessoa = {
  nome: " Gustavo",
  idade: 42,
  email: "gustavofgoulart@gmail.com",
};

for (key in pessoa) {
  console.log(`${key}: ` + pessoa[key]);
}
