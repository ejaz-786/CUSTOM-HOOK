// import React, { useState } from 'react'

import useRandomColor from "../CUSTOM HOOK/useRandomColor"


const RandomColor = () => {
    // const [color,setColor] = useState('');

    //custom hook:~
    const [randomColor,setRandomcolor] = useRandomColor('')

  

  return (
    <>
    <div style={{height:"50vh" ,width:"50vw", backgroundColor:"#"+randomColor}}>
       <button
    //    onClick={()=>{
    //     setColor(Math.random().toString(16).substr(-6));
    //    }}
    onClick={setRandomcolor}
       >
        change color
       </button>
    </div>
      
    </>
  )
}

export default RandomColor
