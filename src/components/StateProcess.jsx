import React, { useState } from 'react'

const StateProcess = () => {
 const [count,setCount] = useState(0)
  
  const updatethenumber = () => { 
     
    setCount(count+1)

    if(count==10){
      setCount(0)
    }

   }


  return (
    <div className='bg-blue-600 h-100 flex justify-center items-center'>
         <div className='bg-white text-black p-10 rounded text-center'>
            <h1>
                This is Count
            </h1>

            <h2 className='text-2xl'>
                   {count}
            </h2>
            <button className='bg-black w-30 p-1 rounded mt-1 border-0 text-white' onClick={updatethenumber}>Click Me</button>
         </div>
    </div>
  )
}

export default StateProcess


