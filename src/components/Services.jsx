import { useState } from "react";



const Services = () => {

  const [count,setCount] = useState(5)
//  Naming Process - baahubali,setBaahubali

  // Syntex

  // const [state,setState] = useState(0)
//  state - data or value
//  setState - update function for data or value. in the component


   console.log('Components','This is Running');
   
  var data = 10
  var newdatas = 12
 const clickme = ()=>{

  //alert("Yes i am click")

  setCount("This is React")

 var newdatas =  12 + 2 
  // data + 2 = 12

  console.log('Function update',newdatas);
  

 }

  return (
    <>
 
   <div style={{padding:"30px"}}>
<h1>State Management</h1>
    
    <button onClick={clickme} style={{backgroundColor:"blue", color:"white", padding:"5px", border:"none", borderRadius:"5px"}}>Click Me</button>
    <h1>{data}</h1>

    <h2>Variable - {newdatas}</h2>

    <h2>UseState - {count}</h2>
   </div>
    

    </>
  )
}

export default Services



