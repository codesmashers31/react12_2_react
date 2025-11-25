import React from 'react'
import Tickets from './Tickets';

const Child = (props) => {

    console.log(props);
    
  return (
   <>
   
   <div>

    This is Child  {props.sendto}
   </div>
   <Tickets  childsendto = {props} />
   
   </>
  )
}

export default Child
