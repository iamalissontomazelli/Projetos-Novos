function calcular(){
    let num = Number(window.prompt('Digite um número: '));

    let res = document.querySelector('section#resultado');
    // validando nuemro a ser analisado 
    res.innerHTML = `<p>O número a ser analisado aqui será o ${num}</p>`;
    //calculo de numero absoluto abaixo
    res.innerHTML += `<p>O seu valor absoluto é ${Math.abs(num)}</p>`
    // calculando a parte inteiro
    res.innerHTML += `<p>A sua parte inteira é ${Math.trunc(num)}</p>`
    // valor inteiro mais proximo
    res.innerHTML += `<p>O valor inteiro mais proximo é ${Math.round(num)}</p>`
    // tirando raiz quadrada
    res.innerHTML += `<p>A Raiz quadrada é ${Math.sqrt(num)}</p>`
    
}