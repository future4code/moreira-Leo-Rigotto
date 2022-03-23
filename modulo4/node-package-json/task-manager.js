let taskList = ["Enviar formulários", "Tomar água"]

const newItem = process.argv[2]

const addItem = () => {
    taskList.push(newItem)
    console.log('Tarefa adicionada com sucesso!')
    console.log(taskList)
}

addItem()