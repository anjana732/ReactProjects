import { useState } from 'react'
import style from './ToDoInput.module.css'

function ToDoInput({onNewToDo}){
    const [toDoName,setToDoName] = useState();
    const [toDoDate, setToDoDate] = useState();

    function onNameChange(e){
        console.log(e.target.value);
        setToDoName(e.target.value);
    }
    function onDateChange(e){
        console.log(e.target.value);
        setToDoDate(e.target.value);
    }

    const handleAddButtonClick = () => {
        onNewToDo(toDoName,toDoDate)
        setToDoName("");
        setToDoDate("");
    }
    return(
        <>
            <input type="text" value={toDoName} onChange={onNameChange}></input>
            <input type="date" value={toDoDate} onChange={onDateChange}></input>
            <button onClick={()=>{handleAddButtonClick()}}>Add</button>
        </>
    )
}
export default ToDoInput