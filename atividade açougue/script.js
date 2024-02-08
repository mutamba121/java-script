function calcularTotal(a, b, c, d) {
    return (a + b + c + d);
}

function calcularDesconto(calcularTotal) {
    const diaDaSemana = new Date().getDay();
    if (diaDaSemana === 3) {
        return calcularTotal * 0.9;
    } else {
        return calcularTotal
    }
}


function calcular() {
    const bov = parseFloat(document.getElementById("bovina").value);
    const suina = parseFloat(document.getElementById("suina").value);
    const lingui = parseFloat(document.getElementById("linguiça").value);
    const ave = parseFloat(document.getElementById("frango").value)

    document.getElementById("total").innerHTML = "total: " + calcularTotal(bov, suina, lingui, ave);
    document.getElementById("desconto").innerHTML = "valor com desconto: " + calcularDesconto(calcularTotal(bov, suina, lingui, ave));
}

