import React, { useEffect, useState } from 'react'
import Tickets from './Tickets'

const StateProcess = () => {

  const [newdatas,setNewDatas] = useState([])

const fetchDatas = async()=>{

   const datastake = await fetch("https://dummyjson.com/products")
   const res = await datastake.json()
   const datas = await res.products

   setNewDatas(datas)
   
   

  //console.log('datas',datas);
   


} 

useEffect(()=>{

  fetchDatas()

},[])



  return (

    <>
    {
       newdatas.map((e)=>(
           <div key={e.id}>
             <h1>{e.id} ) {e.title}</h1>
           </div>
       ))
    }
    


    <Tickets/>
    </>
    

    
  )
}

export default StateProcess
