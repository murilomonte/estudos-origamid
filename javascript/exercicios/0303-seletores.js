// Retorne no console todas as imagens do site
const siteImg = document.querySelectorAll('img');
siteImg.forEach((item, index) => {
    // console.log(item);
});

// Retorne no console apenas as imagens que começaram com a palavra imagem
const apenasImg = document.querySelectorAll('[src^="img/imagem"]');

apenasImg.forEach((item, index) => {
    // console.log(item);
});

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((item, index) => {
    console.log(item);
});


// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2');
// console.log(primeiroh2);


// Selecione o último p do site
const paragrafos = document.querySelector('p');
// console.log(paragrafos[lenght - 1]);
