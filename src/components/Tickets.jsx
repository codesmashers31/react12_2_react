// 

const Tickets = (props) => {
  
   console.log(props.childsendto.sendto);
   


  return (
   <>
   <div className='ticketmain'>

    <h1>{props.childsendto.sendto}</h1>
   
   {[].map((e,i)=>(
      <div className='ticket_details' key={i}>

        

    <div className='ticketimage'>
                 {/* <img src={e.img} alt="" /> */}
           </div>
            
            <div className='ticket_booking'>
                <h1>Movie Name: {e.moviename}</h1>
                {/* <p>Location:{e.location}</p>
                <p>Show Time:{e.time}</p>
                <button>Book Now</button> */}
            </div>
</div>
   ))}


    
   </div>
   </>
  )
}

export default Tickets
