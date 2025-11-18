import React from 'react'
import banner from '../assets/images/banner/baahubali-2-the-conclusion-windows-theme-2-medium.webp'


const Crew = () => {
  
   const year_process =  2019
   const movieName = ` The Epic Movie Of India! ${year_process}` 

   const notes = "The Baahubali 2" 
   const para = "The 12 HD wallpapers are a delight for your eyes. They feature shots from the film, including the majestic Mahishmati Kingdom, our beloved characters Baahubali, Shivagami, Devasena, Bhallaldeva, "
   const moviedetails = `The Baahubali 2: The Conclusion Windows theme  comes with a total of twenty-four mesmerising wallpapers — twelve in High Definition (HD) and twelve in Ultra High Definition (4K). Each wallpaper is infused with the grandeur and unparalleled beauty that is uniquely Baahubali. These meticulously designed wallpapers are far from being mere static images; they are dynamic art pieces, each conveying the essence and emotion of specific ${year_process} scenes from the movie.`
   
   const on = true;
   const off = -88; 

   const values = null





const datas = {title:"Baahubali",heroname:"Prabhas",heroineName:"Anushka",director:"Rajamouli"}



    

  return (
    <>
    <div className='crewdetails'>
        <div className='crewtitle'>
           <h1>{movieName}</h1>
           <p>{moviedetails}</p>
        </div>
 
    </div>
  
  <section className='crewdetails'>
    <div className='crewtitle'>
          <h1>{movieName} {year_process}</h1>
           <img src={banner} />

             <p>{moviedetails}</p>
    </div>
  </section>
   


  {on?<section style={{marginTop:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>

    <div className='box'>
     <h1>{notes}</h1>
     <p>{para}</p>
    </div>

   </section>:<p>This is No Content</p>}
   

   {off && <section style={{marginTop:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>

    <div className='box'>
     <h1>{notes}</h1>
     <p>{para}</p>
    </div>

   </section>}



   {values ?? <section style={{marginTop:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>

    <div className='box'>
     <h1>{notes}</h1>
     <p>{para}</p>
    </div>

   </section>}
 

   <section style={{marginTop:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>

    <div className='box'>
     <h1>{datas.title}</h1>
     <p>{datas.heroname}</p>
     <h3>{datas.heroineName}</h3>
     <h5>{datas.director}</h5>

    </div>

   </section>

      
    

    </>
  )
}

export default Crew
