// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo')
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item, index) => {
    if (index != 0) item.classList.remove('ativo');
});

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach((item, index) => {
    if (!item.hasAttribute('alt')) console.log(`A imagem no indice ${index} nao possui alt`);
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]')
linkExterno.setAttribute('href', 'https://google.com') 
