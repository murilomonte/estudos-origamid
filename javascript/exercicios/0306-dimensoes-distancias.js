window.addEventListener("load", () => {
    // Verifique a distância da primeira imagem
    // em relação ao topo da página
    const imagens = document.querySelectorAll('img');
    console.log(imagens[0].offsetTop);

    // Retorne a soma da largura de todas as imagens
    let larguraTotal = 0;
    imagens.forEach((item, index) => {
        console.log(item.clientWidth)
        larguraTotal += item.clientWidth;
    });
    console.log(larguraTotal);

    // Verifique se os links da página possuem
    // o mínimo recomendado para telas utilizadas
    // com o dedo. (48px/48px de acordo com o google)
    const links = document.querySelectorAll('a');
    links.forEach((item, index) => {
        const width = item.clientWidth;
        const height = item.clientHeight;

        if (width <= 48 || height <= 48) {
            console.log(item, `${height}px/${width}px`,  '- Não possui o tamanho ideal.');
        }
    });
    
    // Se o browser for menor que 720px,
    // adicione a classe menu-mobile ao menu
    const menu = document.querySelector('.menu');
    const mobile = window.matchMedia('(max-width: 720px)').matches;
    if (mobile) {
        menu.classList.add('menu-mobile');
    }
});

