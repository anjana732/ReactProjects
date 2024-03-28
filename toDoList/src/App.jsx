import './App.css'
import ToDoInput from './components/ToDoInput'
import Header from './components/Header'
import ToDos from './components/ToDos'
import { useState } from 'react'

function App() {
  const todo = [{task:"Buy Milk",
                  dueDate:"12-03-23"},{task:"Go to gym", dueDate: "12-03-23"}]

  const [newtask, setNewTask] = useState(todo);

    /*const handleNewToDo = (toDoName, toDoDueDate) => {
      console.log(`todoName: ${toDoName} , toDoDueDate: ${toDoDueDate}`)
      const newToDoItem = [...newtask, {task: toDoName, date: toDoDueDate}];
      console.log(newToDoItem);
      setNewTask(newToDoItem);
    }*/
    const handleNewToDo = (toDoName, toDoDueDate) => {
      console.log(`todoName: ${toDoName} , toDoDueDate: ${toDoDueDate}`);
      const newToDoItem = [...newtask, { task: toDoName, dueDate: toDoDueDate }]; // Use 'dueDate' instead of 'date'
      console.log(newToDoItem);
      setNewTask(newToDoItem);
    };
    
  return (
    <>
      <Header></Header>
      <ToDoInput onNewToDo={handleNewToDo}></ToDoInput>
      <ToDos todos={newtask}></ToDos>
    </>
  )
}

export default App
