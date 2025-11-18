import bahuimage from '../assets/images/banner/baahubali-2-the-conclusion-windows-theme-8-hd.jpg'
import leoimage from '../assets/images/banner/tnm_import_sites_default_files_Leo_VijayFilm_FirstLookPoster_220623_1200.avif'
import vadachennaiimage from '../assets/images/banner/1.jpg'

const Tickets = () => {
  
 const movieTicketDetails = [
    {moviename:"Baahubali",img:bahuimage,time:"2pm to 5pm",location:"Kasi Talkies"}
    ,{moviename:"Leo",img:leoimage,time:"1pm to 4pm",location:"PVR, Chennai"},
    {moviename:"Vada Chennai",img:vadachennaiimage,time:"9pm to 11pm",location:"Rohini DDT"}]   


  return (
   <>
   <div className='ticketmain'>


   
   {movieTicketDetails.map((e,i)=>(
      <div className='ticket_details' key={i}>

        

    <div className='ticketimage'>
                 <img src={e.img} alt="" />
           </div>
            
            <div className='ticket_booking'>
                <h1>Movie Name: {e.moviename}</h1>
                <p>Location:{e.location}</p>
                <p>Show Time:{e.time}</p>
                <button>Book Now</button>
            </div>
</div>
   ))}


    
   </div>
   </>
  )
}

export default Tickets
