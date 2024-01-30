//Peça ao usuário para inserir uma nota de 0 a 100. Utilizando estruturas de controle, 
//classifique a nota em categorias como "Reprovado" (menor que 60), "Regular" (60 a 74), "Bom" (75 a 89) e "Excelente" (90 a 100).

let num = prompt("insira sua nota");

if ( num<60 ) {
    console.log("Vc ta reprovado");
}
else if ( num>=60&&num<74) {
    console.log("Ta regurlazin");
}
else if ( num>=75&&num<89) {
    console.log("ta mec");
}
else if ( num>=90&&num<=100) {
    console.log("ta voandoo paizão,exelente");
}
else {
    console.log("não existe essa nota");
}