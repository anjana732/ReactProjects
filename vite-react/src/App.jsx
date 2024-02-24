import React, { useState } from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  var [data, setData] = useState(1);
  return (
    <>
     <div className="bg-zinc-900 w-screen h-screen text-white">
     <Header/>

   <Body/>
   <Footer/>
   <h1>{data}</h1>
   <button onClick={()=>setData(data+1)} className="text-white " >Click</button>
     </div>
    
    </>
  )
}

export default App