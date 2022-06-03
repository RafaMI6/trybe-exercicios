function adicao(a, b) {
  return a+b;
}
console.log(adicao(5, 7))

function subtrair(a, b) {
  return a-b;
}
console.log(subtrair(10, 80))

function multiplicar(a, b) {
  return a*b;
}
console.log(multiplicar(4, 10))

function divisao(a, b) {
  return a/b;
}
console.log(divisao(50, 10))

function resto(a, b) {
  return a%b;
}
console.log(resto(8, 10))

function maiorNumero(a, b) {
 const maior1 = a;
 const maior2 = b;
 if (maior1 > maior2) {
   return maior1;
 } else {
   return maior2;
 }
}

console.log(maiorNumero(10, 2))

function maiorDe3Number(a, b, c) {
  const maiorA = a;
  const maiorB = b;
  const maiorC = c;
  if (maiorA > maiorB && maiorA > maiorC) {
    return maiorA
  } else if (maiorB > maiorA && maiorB > maiorC) {
    return maiorB
  } else {
    return maiorC
  }
}

console.log(maiorDe3Number(50, 40, 300))

function trueFalse(valor) {
  const valor1 = valor;
  if (valor1 > 0) {
    return 'positivo';
  } else if (valor1 < 0) {
    return 'negativo';
  } else {
    return 0;
  }
}

console.log(trueFalse(0))

function triangulo(a, b, c) {
  const direito = a;
  const esquerdo = b;
  const embaixo = c
  if (direito + esquerdo + embaixo === 180) {
    return true
  } else if (typeof direito !== typeof 0 || typeof esquerdo !== typeof 0 || typeof embaixo !== typeof 0) {
    return 'Erro, valor invalido'
  } else {
    return false
  }
}

console.log(triangulo(60, 59, 60))