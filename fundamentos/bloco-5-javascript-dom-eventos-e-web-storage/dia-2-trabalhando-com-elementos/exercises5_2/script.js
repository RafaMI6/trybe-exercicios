function adicionandoH1() {
  let corpo = document.querySelector('body')
  let h1 = document.createElement('h1');
  h1.innerText = 'Exercício 5.2 - JavaScript DOM';
  h1.className = 'title';
  corpo.appendChild(h1);
}

adicionandoH1()

function adicionandoMain() {
  let corpo = document.querySelector('body');
  let main = document.createElement('main');
  main.className = 'main-content';
  corpo.appendChild(main);
}

adicionandoMain()

function addSection(classe) {
  let main = document.querySelector('main');
  let section = document.createElement('section');
  section.className = classe;
  main.appendChild(section);
}

addSection('center-content');

function addP() {
  let section = document.querySelectorAll('.center-content');
  let p = document.createElement('p');
  p.innerText = "What's my name";
  section[0].appendChild(p)
}
addP();
addSection('left-content');
addSection('right-content');

function addImg(src) {
  let img = document.createElement('img');
  img.src = src;
  img.className = 'small-image';
  let section = document.querySelectorAll('.left-content');
  section[0].appendChild(img);
}

addImg('https://picsum.photos/200');

function addLista(string) {
  let section = document.querySelectorAll('.right-content');
  let ul = document.createElement('ul');
  section[0].appendChild(ul)
  for (let i = 0; i < string.length; i += 1){
    let li = document.createElement('li');
    li.innerText = string[i];
    ul.appendChild(li);
  }
}
addLista(['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'])

function addTagH3(quantidade) {
  let main = document.querySelector('main');
  for (let i = 0; i < quantidade; i += 1) {
    let h3 = document.createElement('h3');
    h3.innerText = 'olá'
    h3.className = 'description'
    main.appendChild(h3);
  }
}

addTagH3(3);
  const removerSection = () => {
    const pai = document.querySelector('main')
    const section = document.querySelectorAll('section');
    for (let i = 0; i < section.length; i += 1) {
      if (section[i].classList.contains('left-content')) {
        pai.removeChild(section[i]);
      }
    }
  }
  removerSection()
  const centralizarSection = () => {
    const section = document.querySelectorAll('.right-content');
    for (let i = 0; i < section.length; i += 1) {
      if (section[i].classList.contains('right-content')) {
        section[i].style.marginRight = 'auto';
      }
    }
  }
  centralizarSection();

  const trocandoCorDeSection = () => {
    const section = document.querySelectorAll('.center-content')
    for (let i = 0; i < section.length; i += 1) {
      if (section[i].classList.contains('center-content')) {
        section[i].style.color = 'green';
      }
    }
  }
  trocandoCorDeSection()

  const removerLi = () => {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li');
    for (let i = li.length - 1; i > 7; i -= 1) {
      ul.removeChild(li[i]);
    }
  }
  removerLi()