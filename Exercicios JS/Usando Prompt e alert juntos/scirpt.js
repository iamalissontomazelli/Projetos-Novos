function validarFormulario(){
    var nomePessoa = document.forms["formCadastro"]["nome"].value;
    if (nomePessoa == ""){
        alert("Por favor informe o seu nome!");
        return false;
    }
    else{
        alert("Ola," + nomePessoa + ", Seja muito bem vindo!");
        return true;
    };
};