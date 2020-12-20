const todoText = document.getElementById('userInput') 
const sessionToDo = document.getElementById('To_do')
const sessionCompleted = document.getElementById('completed')

function createToDo(event) {
    if (event.key == 'Enter') {
        let mainDiv = document.createElement('div')
        let toDo = document.createElement("INPUT")
        let toDoMsg = document.createElement('label')
        let redTrash = document.createElement('img')

        

        toDoMsg.classList.add("todoMsg")
        
        toDoMsg.innerHTML = todoText.value 
        
        redTrash.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fsoylent-red%2Ftrash-2-48.png&f=1&nofb=1'
        
        redTrash.id = 'deleteTrash'
        
        redTrash.alt = 'red trash'
        
        redTrash.addEventListener('click', () => {
            mainDiv.remove()
        })

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
        
        mainDiv.appendChild(toDoMsg);
        
        mainDiv.appendChild(redTrash);
    }
}