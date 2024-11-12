import React from 'react'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Viewallsarees from './Viewall/Viewallsarees'
import Viewallkurtis from './Viewall/Viewallkurtis'
import Viewallwatches from './Viewall/Viewallwatches'
import Viewallfashion from './Viewall/Viewallfashion'
import Ssarees from './Singleitems/Ssarees'
import Skurtis from './Singleitems/Skurtis'
import Swatches from './Singleitems/Swatches'
import Sfashion from './Singleitems/Sfashion'



function App() {
  return (
    <div>
     
      <Router>
   
        <Routes>
        
        <Route path="/" exact element={<Login/>} />
        <Route path="/Signup" exact element={<Signup/>} />
        <Route path="/Dashboard" exact element={<Dashboard/>} />
        <Route path="/Viewallsarees" exact element={<Viewallsarees/>} />
        <Route path="/Viewallkurtis" exact element={<Viewallkurtis/>} />
        <Route path="/viewallwatches" exact element={<Viewallwatches/>} />
        <Route path="/viewallfashion" exact element={<Viewallfashion/>} />
        <Route path="/viewDsarees/:id" exact element={<Ssarees/>} />
        <Route path="/viewDKurtis/:id" exact element={<Skurtis/>} />
        <Route path="/viewDWatches/:id" exact element={<Swatches/>} />
        <Route path="/viewDFashion/:id" exact element={<Sfashion/>} />

        
        

       
      
         
          </Routes>
      </Router>
     
    </div>
  )
}

export default App
