import { Button } from 'bootstrap'
import React from 'react'
import style from './ListItem.module.css'

function ListItem({item}) {
  return (
    <>
        <li class="list-group-item">{item} <button className={style.btnn}>Buy</button></li>
        
    </>
  )
}

export default ListItem