function entrar() {
    // Obter os valores dos campos de entrada
    const email =document.getElementById("e-mail").value;
    const senha = document.getElementById("senha").value; 
}
 
if (email === "aluno222@aluno.senai.br" && senha === "senai.br") {
    alert("login bem-sucedido!");
} else {
    alert("crendeciais onválidas.tente novamente.");
}