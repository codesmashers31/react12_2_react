import { useEffect, useState } from "react";



const StateProcess = () => {
   console.log('Component Running....');
    const [heading,setHeading] = useState([])
    const [datas,setDatas] =useState("Tghis is function")

  // const clickme = ()=>{
  //  console.log('Function  Running....');
  //  setHeading("Function Active this Data")
  // }
     


  // 9clickme()


  // console.log(a);
   //console.log(heading);
   

   const fetch_new = ()=>{
    setDatas('this is object')
   }



    const fetchdatas = ()=>{
        
     fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => setHeading(data.products))
  .catch(error => console.error(error));

  }

  useEffect(()=>{
    console.log('my Effect is ruuning');
 fetchdatas()
  },[datas])



  return (
    <>
    <h1 className='text-4xl'>
     {heading.map((e,i)=>(
       <p key={i}>
           {e.id }
           {e.title}
       </p>

     ))}
    </h1>
  <h2>
 {datas}
  </h2>
   
    <button onClick={fetch_new}>click Now</button>
    </>
  )

  
}

export default StateProcess


