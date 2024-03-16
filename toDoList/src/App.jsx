import './App.css'
import ToDoInput from './components/ToDoInput'
import Header from './components/Header'
import ToDos from './components/ToDos'

function App() {
  const todo = [{task:"Buy Milk",
                  date:"12-03-23"},{task:"Go to gym", date: "12-03-23"}]

  return (
    <>
      <Header></Header>
      <ToDoInput></ToDoInput>
      <ToDos todos={todo}></ToDos>
    </>
  )
}

export default App
