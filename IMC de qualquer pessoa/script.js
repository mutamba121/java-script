function calcularIMC(peso , altura ) {
    return peso/(altura * altura)
}

function classificar() {
    if (imc < 18.5) {
        return("abaixo do peso")
    }
    else if ( imc > 18.5 && imc < 24.9) {
        return("peso normal")
    }
    else if ( imc > 25 && imc < 29.9 ) {
        return("sobrepeso")
    }
    else if ( imc > 30 && imc < 34.9) {
        return("obesidade grau 1 (leve)")
    }
    else if ( imc > 35 && imc < 39.9) {
        return("obesidade grau 2 (moderada)")
    }
    else {
        return("obesidade grau 3 (grave)")
    }

}

function imcc() {
    // Obter os valores dos campos de entrada
    const nome = document.getElementById("nome").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

  
    // Exibir os resultados na página HTML
    document.getElementById("imc").innerHTML = nome + " ; IMC:" + calcularIMC(peso , altura).toFixed(2) + " ; Classificação: " + classificar();
}

