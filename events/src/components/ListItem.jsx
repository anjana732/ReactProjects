import { Button } from 'bootstrap'
import React from 'react'
import style from './ListItem.module.css'

function clickEvent(item){
    console.log(`${item} is being buy`)
}

function ListItem({item}) {
  return (
    <>
        <li class="list-group-item">{item} <button className={style.btnn} onClick={() => {clickEvent(item)}}>Buy</button></li>
        
    </>
  )
}

export default ListItem