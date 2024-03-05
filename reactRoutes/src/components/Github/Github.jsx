import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
function Github() {
   const data = useLoaderData()
   /*const [data, setdata] = useState([])
   useEffect(() =>{
    fetch('https://api.github.com/users/anjana732')
   .then(response => response.json())
   .then(data => {
    console.log(data)
    setdata(data)})
   })*/
   
  return (
    <div>Github Followers: {data.followers}</div>
  )
}

export default Github

export const getGitHubDetail = async() =>{
  const response = await fetch('https://api.github.com/users/anjana732')
  return response.json()
}


