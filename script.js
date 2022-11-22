// Função que faz com que as tarefas sejam adicionadas à lista ordenada
function addToTheList() {
    const button = document.querySelector('#criar-tarefa');
    button.addEventListener('click', () => {
        const input = document.querySelector('#texto-tarefa');
        const ol = document.querySelector('#lista-tarefas');
        const itemList = document.createElement('li');
        itemList.innerHTML = input.value;
        ol.appendChild(itemList);
        input.value = '';
    });
}

// Função que faz com que as tarefas, ao serem clicadas, passem a ter a cor de fundo cinza
function turnToGray() {
    const ol = document.querySelector('ol');
    ol.addEventListener('click', (event) => {
        const itensList = document.getElementsByTagName('li');
        for (let item of itensList) {
            if (item.classList.contains('selected')) {
                item.classList.remove('selected');
            } if (item.className === '') {
                event.target.classList.add('selected');
            }
        }
    });
}

// Função que risca uma tarefa, indicando que ela foi realizada
function completeTask() {
    const ol = document.querySelector('ol');
    ol.addEventListener('dblclick', (event) => {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }
    });
}

// Função que apaga todas as tarefas da lista
function clearAllTasks() {
    const button = document.querySelector('#apaga-tudo');
    button.addEventListener('click', () => {
        const ol = document.querySelector('ol');
        ol.innerHTML = '';
    });
}

// Função que apaga apenas as tarefas finalizadas
function deleteCompletedTasks() {
    const button = document.querySelector('#remover-finalizados')
    button.addEventListener('click', () => {
        const completedTasks = document.querySelectorAll('.completed');
        for (let index = 0; index < completedTasks.length; index += 1) {
            completedTasks[index].remove();
        }
    });
}


turnToGray();
addToTheList();
completeTask();
clearAllTasks();
deleteCompletedTasks();