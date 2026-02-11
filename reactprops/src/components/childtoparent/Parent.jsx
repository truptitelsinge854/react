// import React from 'react'
// import Child from './Child'

// function Parent() {

//   const handleData = (msg) => {
//     console.log(msg)
//   }
//   return (
//     <Child sendData={handleData}></Child>
//   )
// }

// export default Parent

import React from 'react'
import Child from './Child'

function Parent() {
  const handleData = (msg) => {
    console.log(msg)
  }
  return(
    <Child sendData={handleData}></Child>
  )
}
export default Parent