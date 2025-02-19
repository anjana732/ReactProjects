import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/User.jsx'
import Github, {getGitHubDetail} from './components/Github/Github.jsx'
/*const  router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {path: "",
    element: <Home/>},
    {path: "about",
    element: <About/>},
    {path : "contact",
    element: <Contact/>},
    {path: 'user/:id',
    element: <User/>},
    {path: "github",
    element: <Github/>}
  ]
}])*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>}/>
      <Route 
      loader={getGitHubDetail}
      path='github' 
      element={<Github/>}/>
      <Route path='User/:userId' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
