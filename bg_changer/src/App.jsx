import { useState } from 'react'

function App() {
  const [color, setColor] = useState("purple")

  return (
    <>
    
    <div className="bg-black h-screen w-screen flex flex-col justify-end items-center p-12" style={{backgroundColor: color}}>
      <div className="bg-white w-3/4  h-12 flex rounded-xl p-4">
        <button onClick={()=>{setColor("red")}} className="bg-red-600 rounded-full w-16 h-10 items-center gap-5" >Red</button>
        <button onClick={()=>{setColor("white")}} className="bg-white rounded-full w-16 h-10">White</button>
        <button onClick={()=>{setColor("Black")}} className="bg-black rounded-full w-16 h-10 text-white">Black</button>
        <button onClick={()=>{setColor("gray")}} className="rounded-full w-16 h-10 bg-gray-700">Grey</button>
        <button onClick={()=>{setColor("Yellow")}} className="rounded-full w-16 h-10 bg-yellow-300">Yellow</button>
        <button onClick={()=>{setColor("pink")}} className="rounded-full w-16 h-10 bg-pink-400">Pink</button>
        <button onClick={()=>{setColor("green")}} className="rounded-full w-16 h-10 bg-green-400">Green</button>
        <button onClick={()=>{setColor("blue")}} className=" rounded-full w-16 h-10 bg-blue-800">Blue</button>
        <button onClick={()=>{setColor("orange")}} className="rounded-full w-16 h-10 bg-orange-500">Orange</button>
      </div>
      </div>
    </>
  )
}

export default App
