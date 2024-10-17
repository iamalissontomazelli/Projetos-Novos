/* Função de média */

function media(){
    let nome = window.prompt('Qual o nome do Aluno?');
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`));
    let nota2 = Number(window.prompt(`Além de ${nota1}, Qual foi a segunda nota de ${nome}`));
    
    med = (nota1 + nota2)/2

    let res = document.getElementById('resultado');
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark></p>`;
    res.innerHTML = `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark></p>`;
    res.innerHTML = `<p>A média final será <mark>${med}</mark>.</p>`;
}

