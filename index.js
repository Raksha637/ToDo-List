function addToList(){
    var taskname = document.getElementById('taskname').value
    var Tododiv = document.getElementById('MyTodo')

    var newtodoitem = document.createElement('div') 
    
    var todoname = document.createElement('li')
    todoname.innerHTML = taskname 
    
    var deletebtn = document.createElement('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')

    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)

    Tododiv.appendChild(newtodoitem)
}

var Tododiv = document.getElementById('MyTodo')
Tododiv.addEventListener('click', deleteitem)

function deleteitem(e){

    const element = e.target
    if(element.classList[0]=='far')
    {
       element.parentElement.remove()
    }
}