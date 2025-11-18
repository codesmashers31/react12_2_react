import  './App.css'
import Banner from './components/Banner'
import Crew from './components/Crew'
import Tickets from './components/Tickets'
const App = ()=>{

  const movieName = "Baahubali The Epic Movie Of India!" 
  const yearofLaunch = 2015

  return (
    <> 
    <header>
       <div className="title">
        <h1 className='titlename'>{movieName} {yearofLaunch}</h1>
      </div>
    </header>

    <section>
      <Banner/>
    </section>


    <section style={{marginTop:"20px"}}>
      <Crew />

    </section>
       

       <section  style={{marginTop:"20px"}}>
        
         <Tickets/>

       </section>


    </>
  )

}

export default App