import Header from './components/Header'
import FoodItems from './components/FoodItems'
import ErrorMsg from './components/ErrorMsg'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 let foodItem = ["Rice","Chapati","Milk","Ghee","Green Vegetables","Salad","Coffee","Tea"]
  return (
    <>
     <Header/>
     <FoodItems items={foodItem}/>
     <ErrorMsg items={foodItem}/>
    </>
  )
}

export default App
