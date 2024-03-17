import React from 'react'
import ListItem from './ListItem'

function ListGenerator({item}) {
  return (
    <> 
        <ul class="list-group">
        {item.map((i)=> (
            <ListItem item={i}/>  
        ))}
        </ul>
    </>
  )
}

export default ListGenerator