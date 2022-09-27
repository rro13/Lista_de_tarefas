let inputNovaTarefa = document.getElementById("inputNovaTarefa");
let btnNovaTarefa = document.getElementById("btnNovaTarefa");
const elementoUl = $("ul");

var tarefas = [];

inputNovaTarefa.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') { addTarefa() }
})

function addTarefa() {
    let valor = inputNovaTarefa.value;
    if (valor != '') {
        tarefas.push(valor);
        inputNovaTarefa.value = ''
        mostrarTarefas()
    }
}


function mostrarTarefas() {
    elementoUl.empty()
    for (let i = 0; i < tarefas.length; i++) {
        let novoItem = document.createElement('li');
        let texto = tarefas[i];
        // novoItem.innerText = texto;
        novoItem.setAttribute("class", "aberta")
        novoItem.innerHTML = texto + '<img class="btnDelete" width=20px height=20px src="imagens/lixeira-icone.png">'
        elementoUl.append(novoItem);
    }

    // Conclui as tarefas
    let todosLi = document.getElementsByTagName("li");
    for (let item of todosLi) {
        // console.log(item)
        item.addEventListener("dblclick", concluirTarefa)
    }

    // Deleta as tarefas
    let todosBtnDelete = document.getElementsByClassName("btnDelete")
    for (let item of todosBtnDelete) {
        item.addEventListener("click", deletarTarefa)
    }
}

function concluirTarefa() {
    if (this.classList.contains('concluida')) {
        this.setAttribute("class", "aberta")
    } else if (this.classList.contains('aberta')) {
        this.setAttribute("class", "concluida")
    } else {
        this.setAttribute("class", "concluida")
    }
}

function deletarTarefa() {
    var tarefaDeletada = this.parentNode.innerText;
    let index = tarefas.indexOf(tarefaDeletada)
    if (index > -1) {
        tarefas.splice(index, 1);
    }
    mostrarTarefas()
}
