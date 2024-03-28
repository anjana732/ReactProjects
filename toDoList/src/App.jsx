import './App.css'
import ToDoInput from './components/ToDoInput'
import Header from './components/Header'
import ToDos from './components/ToDos'
import { useState } from 'react'

function App() {
  const todo = [{task:"Buy Milk",
                  date:"12-03-23"},{task:"Go to gym", date: "12-03-23"}]

  const [task, setTask] = useState(todo);

    const handleNewToDo = (toDoName, toDoDueDate) => {
      console.log(`todoName: ${toDoName} , toDoDueDate: ${toDoDueDate}`)
    }
  return (
    <>
      <Header></Header>
      <ToDoInput onNewToDo={handleNewToDo}></ToDoInput>
      <ToDos todos={todo}></ToDos>
    </>
  )
}

export default App
