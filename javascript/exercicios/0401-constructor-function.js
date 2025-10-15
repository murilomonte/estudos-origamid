// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        console.log(this.nome + ' andou');
    }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('Joao', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

console.log(joao);
console.log(maria);
console.log(bruno);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
    this.element = document.querySelectorAll(seletor); 
    this.add = (classe) => {
        this.element.forEach(e => {
            e.classList.add(classe);
        });
    };
    this.remove = (classe) => {
        this.element.forEach(e => {
            e.classList.remove(classe);
        });
    };
}

const dom = new Dom('li');
