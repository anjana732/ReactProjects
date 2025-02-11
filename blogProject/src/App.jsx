import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footers } from './components/Footers/Footers'
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=> {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  }, [])
  return !loading ? (
   <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div>
      <Header></Header>
      <main>
        <Outlet>

        </Outlet>
      </main>
      <Footers/>
    </div>
   </div>
  ) : null
}

export default App
