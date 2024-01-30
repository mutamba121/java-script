//Peça ao usuário para inserir um ano. Utilizando estruturas de controle, 
//determine se o ano é bissexto. Lembre-se de que um ano bissexto é divisível por 4,
//exceto em anos que são divisíveis por 100 (a menos que também sejam divisíveis por 400).

let num = prompt("Digite o ano que voce quer")

if ((num % 4 == 0)&& (num % 100 != 0) || (num % 400 == 0) ) {
    console.log(num + " é um ano bissexto")
}
else {
    console.log(num + "não é um ano bissexto")
}