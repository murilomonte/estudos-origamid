// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const cepForm = document.querySelector('#cepForm');
const resultDiv = document.querySelector('.cepResult');

cepForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const cepFormData = new FormData(event.target);

    const cep = cepFormData.get('cep');

    if (cep !== '') {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response => response.text())).then((body) => {
                resultDiv.innerHTML = body;
            }).catch(response => {
                resultDiv.innerHTML = 'Ocorreu um erro. Tente novamente.'
            });
    } else {
        resultDiv.innerHTML = 'Preencha o campo.'
    }
});

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const bitcoinDiv = document.querySelector('.bitcoin');

function fetchBit() {
    fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then((body) => {
            bitcoinDiv.innerHTML = 'Valor bitcoin BRL -> ' + body.BRL.buy
        });
}

fetchBit();

setInterval(() => {
    console.log('fetch')
    fetchBit()
}, 3000);


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
