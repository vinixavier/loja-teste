var lista_produto = document.querySelector("#lista_produto");
var $produto = document.querySelector("#produto");

var produtosAdicionadosNoCarrinho = [];

// var botao = document.querySelector('#btn_p1'); // DOM - Document Object Model

// botao.addEventListener('click', function onClick(produto) {
//     console.log(this.textContent);
// })

//function contar (prod=[] ,valor=[] ,quant=[])
//{
//   var soma=0
//  for(i=0;i<prod. length;i++)
//{
//  document.write("\n Produto: "+prod[i])
//document.write(" Total Produto: "+valor[i]*quant[i])
//soma=soma+valor[i]*quant[i]
//}
//document.write("\n\n Total da compra:"+soma)
//}

//var produtos=[]
//var valores=[]
//var quantidades=[]
//var produto,valor,quantidade
//while(produto!="Sair")
//{
// produto=prompt("Digite o nome do produto")
//if(produto!="Sair")
//{ valor=Number(prompt("Digite o valor do produto"))
// quantidade=Number(prompt("digite a quantidade do produto"))
//produtos.push(produto)
//valores.push(valor)
//quantidades.push(quantidade)

//}

//}

function AdicionarProdutoNoCarrinho(
  idProduto,
  nomeProduto,
  precoProduto,
  quantidadeProduto
) {
  if (quantidadeProduto > 10) {
    alert("Não é possivel adicionar quantidade maior que 10");
    return;
  }
  const quantidadeProdutoEmNumber = Number(quantidadeProduto);
  const novoProduto = {
    idProduto,
    nomeProduto,
    precoProduto,
    quantidadeProduto: quantidadeProdutoEmNumber,
  };

  const posicaoDoProdutoExistente = produtosAdicionadosNoCarrinho.findIndex(
    (produtoDentroDoArray) => produtoDentroDoArray.idProduto === idProduto
  );

  if (posicaoDoProdutoExistente == -1) {
    produtosAdicionadosNoCarrinho.push(novoProduto);
  } else {
    produtosAdicionadosNoCarrinho[
      posicaoDoProdutoExistente
    ].quantidadeProduto += quantidadeProdutoEmNumber;
  }

  console.log("produtosAdicionadosNoCarrinho", produtosAdicionadosNoCarrinho);

  escreveTotal(calcularTotalProdutos());

  escreveProdutosNaListaDeCompras(produtosAdicionadosNoCarrinho);
}
function moedaParaFloat(valor) {
  let textoLimpo = valor.replace("R$", "").replace(",", ".");
  return parseFloat(textoLimpo);
}

function floatParaMoeda(valor) {
  let valorFormatado = (valor < 1 ? "0" : "") + Math.floor(valor * 100);
  valorFormatado = "R$ " + valorFormatado;
  return (
    valorFormatado.substr(0, valorFormatado.length - 2) +
    "," +
    valorFormatado.substr(-2)
  );
  0;
}

// function retornaTotal(){
//     let Total = document.querySelector("#total");
//     moedaParaFloat(valorTotal.innerHTML);
//     return moedaParaFloat(valorTotal.innerHTML);
// }

function escreveTotal(valor) {
  let valorTotal = document.querySelector("#total");
  valorTotal.innerHTML = floatParaMoeda(valor);
}

function escreveProdutosNaListaDeCompras(listaDeProdutosDentroDoCarrinho) {
  lista_produto.innerHTML = "";

  listaDeProdutosDentroDoCarrinho.forEach(function (produto) {
    var li = document.createElement("li");
    li.innerText = `${produto.nomeProduto} - (${produto.quantidadeProduto})x ${
      produto.precoProduto
    } - SubTotal: ${floatParaMoeda(
      produto.precoProduto * produto.quantidadeProduto
    )}`;
    lista_produto.appendChild(li);
  });
}

function calcularTotalProdutos() {
  // let todosProdutos = document.querySelectorAll(".product-card-price");
  // let todasQuantidades = document.querySelectorAll(".qtd");
  // let totalProdutos = 0;
  // for (let posicao = 0; posicao < todosProdutos.length; posicao++) {
  //     let umPreco = moedaParaFloat(todosProdutos[posicao].innerHTML);
  //     let umaQuantidade = moedaParaFloat(todasQuantidades[posicao].value);
  //     let subtotal = umaQuantidade * umPreco;
  //     totalProdutos += subtotal;
  // }
  // return totalProdutos;

  let totalProdutos = 0;

  for (
    let posicao = 0;
    posicao < produtosAdicionadosNoCarrinho.length;
    posicao++
  ) {
    totalProdutos +=
      produtosAdicionadosNoCarrinho[posicao].precoProduto *
      produtosAdicionadosNoCarrinho[posicao].quantidadeProduto;
  }

  return totalProdutos;
}
function quantidadeMudou() {
  escreveTotal(calcularTotalProdutos());
}
function aoCarregarPagina() {
  let camposQuantidade = document.querySelectorAll(".qtd");
  for (let i = 0; i < camposQuantidade.length; i++) {
    camposQuantidade[i].onchange = function (e) {
      if (e.target.value > 10) {
        alert("Não é possivel adicionar quantidade maior que 10");
        e.target.value = 10;
      }

      if (e.target.value < 1) {
        alert("Não é possivel adicionar quantidade menor que 1");
        e.target.value = 1;
      }
    };
  }
}

window.onload = function () {
  aoCarregarPagina();
  quantidadeMudou();
};

function LimparLista() {
  lista_produto.innerHTML = "";
  produtosAdicionadosNoCarrinho = [];
  escreveTotal(0);
}

// console.log("MEU BOTAO", botao);
// Estudar o que são seletores (Selectors)

// CSS

// confirm('Você está entrando na loja do Palmeiras!!!');
