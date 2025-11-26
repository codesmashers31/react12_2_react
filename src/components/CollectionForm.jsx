import { useState } from "react"


const CollectionForm = () => {

    const [data,setdata] = useState({fullname:"",email:"",mobile:""})


   
    const datachange = (e)=>{

          setdata({...data,[e.target.name]:e.target.value})
    

    }


    //console.log(data);
    
    const dataclick = (e)=>{

        e.preventDefault()
    //    console.log(e);
       
    
//    alert("Click")

    //  console.log(data);
     

     const changeData = JSON.stringify(data)

    //  console.log(changeData);
      localStorage.setItem("userdatas",changeData)

     
        alert('Succfully done')

    setdata({fullname:"",email:"",mobile:""})

    }


    
   

  return (
    <>
    <div className='bg-green-500 text-white p-10 h-100 flex justify-center items-center'>
        <div className='bg-white text-black p-20 rounded'>
        <form className="flex flex-col gap-3 justify-center items-center bg-amber-100 p-2 rounded">
            <div>
                <label>Enter The Name</label>
        <input type="text" name="fullname" value={data.fullname}  onChange={datachange} placeholder='Enter The full name'  className='bg-gray-800 mx-6 w-100 text-white p-1 rounded'   />
            </div>
          <div>
        <label>Enter The Email</label>
        <input type="email" name="email" value={data.email} placeholder='Enter the valid email' onChange={datachange}  className='bg-gray-800 mx-6 w-100 text-white p-1 rounded'   />
            </div>
              <div>
                <label>Enter The Mobile</label>
        <input type="number" name="mobile"  value={data.mobile}  placeholder='Enter the valid Mobile Number' onChange={datachange}  className='bg-gray-800 w-100 mx-6 text-white p-1 rounded'   />
            </div>
           
           <div>
            <button className="bg-black w-70 p-1 rounded text-white" onClick={dataclick}>Register</button>
           </div>

       </form>
    </div>
    </div>
    </>
  )
}

export default CollectionForm
