let patriarcas = ["Pedro", "Paulo", "Thiago"];

for (patriarca in patriarcas) {
  console.log("for ...in " + patriarcas[patriarca]);
}

for (patriarca of patriarcas) {
  console.log("for ...of " + patriarca);
}
