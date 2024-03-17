import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import ListGenerator from './components/ListGenerator'
import './App.css'
function App() {

  const list = ["Roti", "Dal", "Rice", "Salad","Milk", "Coffee", "Curd", "Vegetables"]

  return (
    <>
    <div className='container'>
    <Header/>
    <ListGenerator item={list}/>
    </div>
    </>
  )
}

export default App
