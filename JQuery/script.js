$(document).ready (function (){
    $('#cep').blur(function (){
        var valor = $(this).val();
        $.get("https://viacep.com.br/ws/" + valor +"/json/", function(dados, status){
        console.log(dados);
        $("#city").val(dados.localidade);
        $("#uf").val(dados.uf);
        });
    });
});