import React, { useEffect, useState } from 'react'

const ShowDatas = () => {

  const [datas,setDatas] = useState({})

 const showData = ()=>{
      
   const data =  localStorage.getItem("userdatas")

       //console.log(data);

       const chnagedatas = JSON.parse(data)
       //console.log(chnagedatas);

       setDatas(chnagedatas)
       


 }

 useEffect(()=>{
    (async() =>{ 
      await showData()
    }
    )()
 },[])



  return (
    <>
     
     <div className='bg-blue-500 p-20 h-100'>
             <div className='bg-white w-80 h-50 rounded p-5'>
                <h1>Name:{datas.fullname}</h1>
                <p>Email:{datas.email}</p>
                <p>Mobile:{datas.mobile}</p>
                <button className='bg-yellow-400 p-1 w-40 rounded'>View Now</button>
             </div>
     </div>
    
    </>
  )
}

export default ShowDatas
