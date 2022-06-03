// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// function verificaPalindromo(arara) {
//   let palindromo = arara;
//   let palavraSeparado = palindromo.split("");
//   let reverso = palavraSeparado.reverse("")
//   let palavraJuntas = reverso.join("");
//   if (palindromo === palavraJuntas) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(verificaPalindromo("arara"));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// let arrayTest = [2, 3, 6, 7, 10, 1];
// function verificaMaior(aray) {
//   let array = aray;
//   let elemento = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > elemento) {
//       elemento = array[i];
//     }
//   }
//   return array.indexOf(elemento);
// }
// console.log(verificaMaior(arrayTest));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// let arrayTeste = [2, 4, 6, 7, 10, 0, -3];
// function verificaMenor(numeros) {
//   let arrayNumeros = numeros;
//   let resultado;
//   for (let a = 1; a < arrayNumeros.length; a += 1) {
//     for (let i = 0; i < arrayNumeros.length; i += 1) {
//       if (arrayNumeros[i] < arrayNumeros[a]) {
//         resultado = arrayNumeros[i];
//       }
//     }
//   } 
//   return arrayNumeros.indexOf(resultado);
// }
// console.log(verificaMenor(arrayTeste));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// let nomesTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// function verificaCaracterios(nomes) {
//   let arrayNome = nomes;
//   let resultado = 0;
//   let nome = '';
//   for (let i = 0; i < arrayNome.length; i += 1) {
//     if (arrayNome[i].length > resultado) {
//       resultado = arrayNome[i].length
//       nome = arrayNome[i];
//     }
//   }
//   return nome;
// }
// console.log(verificaCaracterios(nomesTest))

// let arrayInteiros = [2, 3, 2, 5, 8, 2, 4]
// function qualRepeteMais(inteiros) {
//   let numeros = inteiros;
//   let resultado;
//   for (let a = 1; a < numeros.length; a += 1) {
//     for (let i = 0; i < numeros.length; i += 1) {
//       if (numeros[i] === numeros[a])                    em progresso
//       resultado = numeros[a]
//     }
//   }
//   return resultado
// }
// console.log(qualRepeteMais(arrayInteiros));

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// function somatorioNumerosNatural(natural) {
//   let n = natural;
//   let contador = 0;
//   for (let i = 1; i <= n; i += 1) {
//     contador = contador + i
//   }
//   return contador
// }
// console.log(somatorioNumerosNatural(5))

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// function finalString(stringWord, stringEnding) {
//   let palavra = stringWord.split('')
//   let final = stringEnding.split('')
//   let bol;
//   for (let i = 0; i < final.length; i += 1) {
//     if (palavra[palavra.length - final.length + i] === final[i]) {
//       bol = true
//     } else {
//       bol = false
//     }
//   }
//   return bol;
// }

// console.log(finalString('gabriel', 'rafael'))