import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import ListGenerator from './components/ListGenerator'
import './App.css'
import ErrorMsg from './components/ErrorMsg'
import { useState } from 'react'
import UserInput from './components/UserInput'
function App() {

 // const list = ["Roti", "Dal", "Rice", "Salad","Milk", "Coffee", "Curd", "Vegetables"]

 const [list, setList] = useState(["Roti"]);

 let [bgColor, setBgColor] = useState()

  function handleKeyDown(e){
   // console.log(e.target.value)
   if(e.key === "Enter"){
    let newList = e.target.value;
    e.target.value ="";
    let addedList = [...list, newList];
    setList(addedList);
   }

  }
  return (
    <>
    <div className='container'>
    <Header/>
    <input type='text' placeholder='Enter food item here' onKeyDown={(e)=>{handleKeyDown(e)}}></input>
    <ListGenerator item={list}/>
    <ErrorMsg item={list}/>
    </div>
    </>
  )
}

export default App
