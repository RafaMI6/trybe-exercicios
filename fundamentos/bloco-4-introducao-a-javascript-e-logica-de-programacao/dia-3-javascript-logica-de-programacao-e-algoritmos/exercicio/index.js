// exercício 1
// let fatorial = 10;
// let resultado = fatorial;

// for (let i = 1; i < fatorial; i +=1 ) {
//   resultado *= i;
  
// }
// console.log(resultado);

//exercício 2
// let word = 'tryber';
// let palavraReversa = ' '
// for (let i = 0; i < word.length ; i +=1) {
//   palavraReversa += word[word.length - 1 - i]
// }
// console.log(palavraReversa)

//exercício 3
// let aray = ['java', 'javascript', 'python', 'html', 'css'];
// let maior = aray[0];
// let menor = aray[0];
//   for (let i = 1; i < aray.length; i += 1) {
//     if (aray[i].length > maior.length) {
//       maior = aray[i];
//     }
//   }
//   for (let i = 0; i < aray.length; i +=1) {
//     if (aray[i].length < menor.length) {
//       menor = aray[i];
//     }
//   }
//   console.log(maior)
//   console.log(menor)
let maiorPrimo = 0
for (let i = 0; i <= 50; i += 1) {
  let ePrimo = true;
  for (let index = 2; index < i; index +=1) {
    if (i % index === 0) {
      ePrimo = false;
    }
  }
  if (ePrimo) {
    maiorPrimo = i;
  }
}
console.log(maiorPrimo);

