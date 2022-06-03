const a = 2;
const b = 5;
const c = 7;
const valorDefin = 0;

//exercicio 1
console.log(soma = a + b);
console.log(subtracao = a - b);
console.log(multiplicacao = a * b);
console.log(divisao = a / b);
console.log(modulo = a % b);

//exercicico 2
if (a > b){
console.log("'a' é maior que 'b'");
}else{
    console.log("'b' é maior que 'a'");
}

//exercicio 3
if (a > b && a > c){
    console.log("'a' é maior que 'b' e 'c'");
}else if(b > a && b > c){
    console.log("b é maior que 'a' e 'c'");
}else{
    console.log("c é maior 'a' e 'b'")
}

//exercicio 4
if (valorDefin > 0){
    console.log("positive")
}else if(valorDefin < 0){
    console.log("negative");
}else{
    console.log("zero")
}

//exercicio 5
const trianEquilaa = 60;
const trianEquilab = 60;
const trianEquilac = -15;
if (trianEquilaa === 60 && trianEquilab === 60 && trianEquilac === 60){
    console.log(true);
}else if (trianEquilaa != 60 && trianEquilaa > 0 || trianEquilab != 60 && trianEquilab > 0 || trianEquilac != 60 && trianEquilac > 0){
    console.log(false);
}else{
    console.log('[ERRO!!!]');
}

// exercicio 6
const valorXadrez = 'bispo';
let peca = valorXadrez.toLowerCase();

switch(peca){
  case ('peão'):
    console.log('move-se uma vez');
    break;
  case ('bispo'):
    console.log('move-se pelas diagonais');
    break;
  case ('torre'):
    console.log('move-se pelos lados');
    break;
  case ('cavalo'):
    console.log('move-se em L ficando na ultima quadra')
  case ('dama'):
    console.log('move-se pelos lados, diagonais, para frente e para trás')
    break;
  case ('rei'):
    console.log('move-se para a primeira quadra ao redor dele')
  default:
    console.log('valor invalido')
}
