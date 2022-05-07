import { useEffect, useRef, useState } from "react"


const Component=props=>{
   const box = useRef('')
     const [color, setColor] =useState('')
    useEffect(()=>{
    setTimeout(() => {
       if(box.current.style.backgroundColor == 'blue'){
        box.current.style.backgroundColor = 'red';
        setColor('red')
       } else {
           box.current.style.backgroundColor = 'blue';
           setColor('blue')
        }
   }, 1000);
    }, [color])


    return(
   <div ref={box}
        style={{width: 300, height: 300, backgroundColor: "red"}}>

   </div>
    )
}
export default Component