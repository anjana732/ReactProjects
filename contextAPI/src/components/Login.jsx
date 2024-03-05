import React, {useState, useContext} from 'react'
import UserContext from '../Context/useContext'
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //below we are setting data to userContext
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault() //use to stop default post or get or any related work
        setUser({username, password})
    }
  return (
    <>
    <h2>Login</h2>
    <input type='text' 
    value={username}
    onChange={(e)=> setUsername(e.target.value)}
    placeholder='username'/>
    <input type='text' 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    placeholder='password'/>
    <button onClick={handleSubmit} >Submit</button>
    </>
  )
}

export default Login