import { useState } from "react"



const StateProcess = () => {

  const [color,setColor] = useState(true)


  const changecolor =()=>{

    setColor(!color)
    
  }


  const style = {
       
    backgroundColor:color?"yellow":"black",
    color:color?"black":"white"

  }
  
  return (
    <>
<div className="flex gap-8 flex-col p-10 justify-center items-center">
    {color?<div className="bg-black text-white rounded-full flex justify-center items-center w-50 h-50 p-10">
          <p className="text-2xl">Off</p>
        </div>: <div className="bg-yellow-300 text-black rounded-full flex justify-center items-center w-50 h-50 p-10">
          <p className="text-2xl">On</p>
        </div>}
       
        

       
        <div className="flex">
        <button style={style} className="p-1 w-50 rounded mx-2" onClick={changecolor}>{color?"ON":"Off"}</button>
        
        </div>
        </div> 
    </>
  )
}

export default StateProcess
