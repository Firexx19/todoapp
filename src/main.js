import { createIcons, icons } from 'lucide';
createIcons({ icons });
import { toDoList } from './data'
import { renderToDos } from './render'
import './style.css'

let updatedToDos= toDoList;

renderToDos(updatedToDos)

window.handleDelete =function handleDelete(id){
    updatedToDos = updatedToDos.filter(obj=>obj.id!=id)

    renderToDos(updatedToDos)
}


window.handleUpdate = function handleUpdate(id){
    const selectedToDo = updatedToDos.find(obj=>obj.id===id)
    selectedToDo.done=!selectedToDo.done


}

window.handleAdd = function handleAdd() {
    const newtodo = document.getElementById("newtodo").value

    if(newtodo.trim().length() == 0) return

    const id = Date.now();
    const newitem = {id, name: newtodo, done:false}
    updatedToDos = [...updatedToDos,newitem]
    renderToDos(updatedToDos)
    document.getElementById("newtodo").value="";
}