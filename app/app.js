var tarefa1 = "Ir ao supermercado";
var tarefa2 = "Estudar programação";
var tarefa3 = "Atualizar o LinkedIn";
var tarefas = [];

tarefas.push(tarefa1, tarefa2, tarefa3);
var novaTarefa = "Regar plantas";
// console.log(tarefas);
// alert("Sua nova tarefa é" + novaTarefa);
tarefas.push(novaTarefa);

function exibirTarefas(lista){
    for(let i = 1; i < tarefas.length + 1; i++){
        console.log("Minha tarefa " + i + " " + "é: " + tarefas[i-1])
    };
}
// exibirTarefas(tarefas);

function adicionarTarefas(tarefaNova, lista){
    novaTarefa = tarefaNova;
    console.log(novaTarefa);
    lista.push(novaTarefa);
    return exibirTarefas(tarefas);
};
// adicionarTarefas("Limpar o quintal", tarefas);

const novaTarefaObj = {
    id : 1,
    titulo : "Calibrar pneu da bicicleta",
    descricao : "Levar a bicicleta vermelha ao posto e calibrar o pneu traseiro com 32 psi",
};

var tarefasObj = [];
tarefasObj.push(novaTarefaObj);

function exibirTarefasObj(lista){
    for(let i = 0; i < lista.length; i++){
        console.log("Tarefa id: " + lista[i].id);
        console.log("Titulo: " + lista[i].titulo);
        console.log("Descrição: " + lista[i].descricao);
    }
};

// exibirTarefasObj(tarefas1)

function adicionarTarefas1(tituloTarefa, descricaoTarefa){
    const novaTarefaObj = {
        id: tarefasObj.length + 1,
        titulo: tituloTarefa,
        descricao: descricaoTarefa
    }
    return tarefasObj.push(novaTarefaObj)
};

adicionarTarefas1("caminhar","fazer exercicio");

exibirTarefasObj(tarefasObj);



