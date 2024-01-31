//Desenvolva um programa em JavaScript que solicite ao usuário a inserção de uma nota no intervalo de 0 a 100.
//Utilize a estrutura de controle switch case para converter a nota para um conceito, seguindo a seguinte tabela:

let nota = prompt("Diga a sua nota, chefia.");
let conceito; 

switch (true) {
    case nota >= 0 && nota <= 59:
    conceito = "F";
    break;
    case nota >=60 && nota <= 69:
    conceito = "D";
    break;
    case nota >= 70 && nota <= 79:
    conceito = "C";
    break;
    case nota >= 80 && nota <= 89:
    conceito = "B";
    break;
    case nota >= 90 && nota <= 100:
    conceito = "A";
    break;
    default:
        console.log("Nota inválida,menó");

}

if (conceito) {
    console.log(conceito);
}