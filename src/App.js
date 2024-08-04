import React from 'react'
import TrackContextProvider from './Context/Context'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Lyrics from './Components/Lyrics'


function App() {
  return (
    <TrackContextProvider>
      <NavBar/>
      <div>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/lyrics/track/:id" element= {<Lyrics/>} />
        </Routes>            
      </div>
      {/* <Home/> */}
    </TrackContextProvider>
  )
}

export default App