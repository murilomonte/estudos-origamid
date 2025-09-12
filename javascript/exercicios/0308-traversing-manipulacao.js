// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copyMenu = menu.cloneNode(true);

const copy = document.querySelector('.copy');
copy.appendChild(copyMenu);

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector('.faq-lista');
console.log(faqLista.firstElementChild);

// Selecione o DD referente ao primeiro DT
console.log(faqLista.children[1].innerHTML);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
const faq = faqLista.parentElement;

faq.innerHTML = animais.innerHTML