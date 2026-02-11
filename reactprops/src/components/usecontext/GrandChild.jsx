import React from 'react'
import { useContext } from 'react'
import { NameContext } from './Parent'
import { useEffect } from 'react'

function GrandChild() {

  const name = useContext(NameContext)

  useEffect(() => {
    console.log(name)
  },[])
 
  return (
    <div>{name}</div>
  )
}

export default GrandChild