import React from 'react'

function ErrorMsg({item}) {
  return (
    <>
    {item.length === 0 ? <p>No item to display.</p>: null}
    </>
  )
}

export default ErrorMsg