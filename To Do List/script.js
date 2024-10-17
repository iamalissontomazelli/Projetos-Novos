let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    //Pegar o valor digitado no input 
    let valorInput = input.value; 

    //Se não for vazio, nem nulo, nem indefinido 
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        let novoItem = `<div class="item">
        <div class="item-icone">
            <i class="fa-regular fa-circle"></i>
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete"><i class="fa-regular fa-trash-can"></i>Deletar</button>
        </div>`

        main.innerHTML += novoItem;
    }

}