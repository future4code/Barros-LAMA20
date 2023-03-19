/*------------------------------------ Exercício 3 ----------- */

let novasTarefas = process.argv

const listaTarefas = novasTarefas.filter((item, indice)=>{
    return indice > 1
})

console.log("Nova tarefa adicionada!!!")
console.log(`Tarefas: [${listaTarefas}]`)