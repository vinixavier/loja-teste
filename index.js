var lista_produto = document.querySelector('#lista_produto');
var $produto = document.querySelector('#produto');

// var botao = document.querySelector('#btn_p1'); // DOM - Document Object Model

// botao.addEventListener('click', function onClick(produto) {
//     console.log(this.textContent);
// })


function AdicionarProdutoNoCarrinho(nomeProduto, precoProduto) {
    var li = document.createElement('li');
    li.innerText = nomeProduto + " - " + precoProduto;
    lista_produto.appendChild(li);

    // console.log('PRODUTO ADICIONANDO', nomeProduto, precoProduto);
}

// console.log("MEU BOTAO", botao);
// Estudar o que são seletores (Selectors)

// CSS 

// confirm('Você está entrando na loja do Palmeiras!!!');


