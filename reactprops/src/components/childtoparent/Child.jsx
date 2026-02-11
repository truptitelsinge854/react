// import React from 'react'

// function Child(props) {
//   return (
//     <>
//     <div>Click to console log</div>
//     <button onClick={() => props.sendData("Hello Parent")}></button>
//     </>
//   )
// }

// export default Child

import React from 'react'

function Child(props) {
  return(
    <button onClick={() => props.sendData("Hello from child")}>Click Here</button>
  )
}
export default Child