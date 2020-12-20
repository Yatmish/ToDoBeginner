const todoText = document.getElementById('userInput') 
const sessionToDo = document.getElementById('To_do')
const sessionCompleted = document.getElementById('completed')

function createToDo(event) {
    if (event.key == 'Enter') {
        let mainDiv = document.createElement('div')
        let toDo = document.createElement("INPUT")
        let toDoMsg = document.createElement('label')
        
        toDoMsg.classList.add("todoMsg")
        toDoMsg.innerHTML = todoText.value 
        
        mainDiv.classList.add('toDo')

        toDo.classList.add('todo')
        toDo.type = 'checkbox'
        toDo.addEventListener('click', () => {
            if(toDo.checked) {
                sessionCompleted.appendChild(mainDiv)
            } else {
                sessionToDo.appendChild(mainDiv)
            }   
        })

        todoText.value = '';

        sessionToDo.appendChild(mainDiv);
        mainDiv.appendChild(toDo);
        mainDiv.appendChild(toDoMsg)
    }
}