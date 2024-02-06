function entrar() {
    // Obter os valores dos campos de entrada
    const email = document.getElementById("e-mail").value;
    const senha = document.getElementById("senha").value;


    if (email === "aluno2" && senha === "senai") {
        alert("login bem-sucedido!");
    } else {
        alert("crendeciais inválidas.tente novamente.");
    }
}