import { useState } from "react";
 const useRandomColor = () =>{
    const [color,setColor] = useState('');

// for generatin random hexadecimal color :~

   const changeColor = () =>{
    setColor(Math.random().toString(16).substr(-6))
   }

    return [color,changeColor];
    // return [];
}
export default useRandomColor;