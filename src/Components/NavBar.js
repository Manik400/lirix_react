import React, { useContext } from 'react'
import { TrackContext } from '../Context/Context'

const NavBar = () => {
  // const [,,search,] = useContext(TrackContext);
  return (
    <div className="text-white bg-black w-auto h-16 flex justify-around items-center ">
      <div className=" container  flex justify-between">
        <h3 className= "text-white text-2xl ps-16 shadow-slate-300">Lyrical Land</h3>
        <div className="flex justify-center py-1 text-white">
          {/* <h1 >{search.toString()}</h1> */}
          <button> IN </button>
          <button> ABOUT ME </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar