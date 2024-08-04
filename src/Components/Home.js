import React, { useContext, useEffect } from 'react'
import Search from './Search'
import Tracks from './Tracks'
import { TrackContext } from '../Context/Context';
// import NavBar from './NavBar'


const Home = () => {
  const [,,search,setSearch] = useContext(TrackContext);

  useEffect(() => {
    if(search === true){console.log("1");console.log(search);setSearch(false);console.log(search);}
  },[])

  return (
    <React.Fragment>
        <Search/>
        <Tracks/>
    </React.Fragment>
  )
}

export default Home
