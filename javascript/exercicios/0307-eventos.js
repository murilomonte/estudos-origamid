// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function linkHander(event) {
    const linksAtivos = document.querySelector('.ativo');

    event.preventDefault();

    if (linksAtivos != null) {
        linksAtivos.classList.toggle('ativo');
    }

    event.currentTarget.classList.toggle('ativo');
}

linksInternos.forEach((item, index) => {
    item.addEventListener('click', linkHander);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const todosElementos = document.querySelectorAll('body *');

// function elementoHandler(event) {
//     console.log(event.currentTarget);
// }

// todosElementos.forEach((item, index) => {
//     item.addEventListener('click', elementoHandler);
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// const todosElementos = document.querySelectorAll('body *');

// function removeElemento(event) {
//     event.preventDefault()
//     event.target.remove();
// }

// todosElementos.forEach((item, index) => {
//     item.addEventListener('click', removeElemento);
// });

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
const htmlTag = document.querySelector('html');

function aumentaFonte(event) {
    const html = document.documentElement;

    if (event.key === 't') {
        html.classList.toggle('textoMaior')
    }
}

window.addEventListener('keydown', aumentaFonte)