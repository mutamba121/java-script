//Solicite ao usuário para inserir os três lados de um triângulo.Com base nos valores inseridos, 
//determine se o triângulo é "Equilátero" (todos os lados iguais), "Isósceles" (dois lados iguais) 
//ou "Escaleno" (todos os lados diferentes).

let num1 = prompt("insira a base do triangulo")
let num2 = prompt("insira um lado do triangulo")
let num3 = prompt("insira o outro lado")

if ( num1==num2 && num2==num3) {
    console.log("Esse triangulo é Equilátero")
}
else if (num1==num2||num1==num3||num2==num3) {
    console.log("esse triangulo é Isósceles")
}
else {
    console.log("esse triangulo é Escaleno")
}