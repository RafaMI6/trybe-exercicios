document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = "blue"

document.querySelector('#primeiroFilhoDoFilho').innerHTML = 'Rafael'

document.querySelector('#pai').firstElementChild.innerHTML = 'Acessando primeiro filho apartir de pai'

document.querySelector('#elementoOndeVoceEsta').previousElementSibling.style.backgroundColor = 'black'

document.querySelector('#elementoOndeVoceEsta').nextSibling.textContent = 'Atenção acessado';

document.querySelector('#elementoOndeVoceEsta').nextElementSibling.style.backgroundColor = 'red'

document.querySelector('#pai').lastElementChild.previousElementSibling.innerHTML = 'terceiro filho'

function quintoFilho() {
  const pai = document.querySelector('#pai');
  const secao = document.createElement('section');
  secao.id = 'quintoFilho'
  pai.appendChild(secao);
}

quintoFilho()

function netoDePai() {
  const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
  const secao = document.createElement('section')
  elementoOndeVoceEsta.appendChild(secao);
  secao.id = 'terceiroFilho'
}

netoDePai()

function meuNeto() {
  const primeiroFilho = document.querySelector('#primeiroFilhoDoFilho');
  const secao = document.createElement('section');
  primeiroFilho.appendChild(secao);
  secao.id = 'meuPrimeiroNeto'
}

meuNeto()

// const neto = document.querySelector('meuPrimeiroNeto')              //em progresso
// const terceiroFilho = neto.parentElement.parentElement.nextElementSibling;

// console.log(terceiroFilho)

function removerFilhoSelecionado() {
  const section = document.querySelectorAll('section');
    for (let i = 0; i < section.length; i += 1) {
      const elemento = section[i];
      if (elemento.id !== 'elementoOndeVoceEsta' && elemento.id !== 'primeiroFilhoDoFilho' && elemento.id !== 'pai') {
        elemento.remove()
      }
    }

    //ou

    // const pai = document.getElementById('pai');

    // for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    //no primeiro ponto em virgula esta colocando os filhos ao contrario, no ultimo esta tirando um dos filhos
    //   const currentChildren = pai.childNodes[index];
    //   if (currentChildren.id !== 'elementoOndeVoceEsta') {    
    //     currentChildren.remove();
    //   }
    // }

    // const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    // segundoEUltimoFilhoDoFilho.remove();
}
removerFilhoSelecionado();