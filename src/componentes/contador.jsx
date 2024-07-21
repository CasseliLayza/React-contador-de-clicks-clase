import React from 'react'
import '../hojas-de-estilo/Contador.css'

function Contador({ numeroDeclicks }) {
  return (
    <div className='contador'>{numeroDeclicks}</div>
  )
}

export default Contador