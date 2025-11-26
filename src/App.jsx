import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Crew from './components/Crew'
import Tickets from './components/Tickets'
import Services from './components/Services'

// In your App.js or main layout component
import Footer from './components/Footer'
import StateProcess from './components/StateProcess'
import Props from './components/Props'
import FormHandling from './components/FormHandling'
import CollectionForm from './components/CollectionForm'
import ShowDatas from './components/ShowDatas'

const App = ()=> {
  return (
   <>
    <div className="App">
      {/* <NavBar /> */}
      <main>
        <Routes>
      <Route path='/' element={<HomePage/>}   />
      <Route path='/about' element={<Crew/>}   />
      <Route path='/product' element={<Tickets/>}   />
       <Route path='/service' element={<Services/>}   />
        <Route path='/state' element={<StateProcess/>}   />
        <Route path='/form' element={<FormHandling/>}   />
         <Route path='/collectionform' element={<CollectionForm/>}   />
         <Route path='/showdatas' element={<ShowDatas/>}   />
      

    </Routes>
      </main>
      {/* <Footer /> */}
    </div>
   </>
  )
}

export default App