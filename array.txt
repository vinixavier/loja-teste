[1, 2, 3].push(4); // Adiciona o item no final na lista : [1, 2, 3, 4]
[1, 2, 3].pop(); // Remove o ultimo item da lista : [1, 2]
[1, 2, 3].shift(); // Remove o primeiro item da lista : [2, 3]
[1, 2, 3].unshift(0); // Adiciona no inicio da lista : [0, 1, 2, 3]

["a", "b"].concat("c"); // Concatena ou adiciona no ultimo elemento : ["a", "b", "c"]
["a", "b"].join("-"); // Unir todos os elementos de uma lista com "-" : "a-b"
["b", "b"].indexOf("b"); // Retorna o index do primeiro que encontrar: 0
["b", "b"].lastIndexOf("b"); // Retorna o index do ultimo que encontrar: 1
["a", "b"].includes("b"); // Verifica se existe dentro da lista : true
["a", "b", "c"].slice(1); // Recorta o primeiro a lista : ["b", "c"]

[3, 5, 6, 8].find(n => n > 7); // Busca um item na lista com uma condição : 8
[3, 5, 6, 8].findIndex(n => n > 7); // Busca um item e retorna o index : 3
[3, 5, 6, 8].map(x => x * 2); // Varre a lista a retorna a condição : [6, 10, 12, 16]
[3, 5, 6, 8].filter(x => x > 3); // Retorna apenas os valores da condição : [5, 6, 8]
[3, 5, 6, 8].reduce((acc, cur) => acc + cur); // Varre e faz a condição em um item : 22
[3, 5, 6, 8].every(x => x < 9); // Verifica se todos os itens estão de acordo : true
[3, 5, 6, 8].some(x => x > 6); // Valida se um dos itens estão de acordo : true
[3, 5, 6, 8].reverse(); // Inverte toda a array : [8, 6, 5, 3]
[3, 5, 6, 8].at(-2); // Varre a array de trás para frente : 6