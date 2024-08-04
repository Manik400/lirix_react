import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Track = (props) => {
    const {track} = props;

  return (
    <div className='p-8 bg-pink-950 m-4 text-white rounded-md shadow-md shadow-slate-200 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 hover:bg-pink-900 duration-150' >
        <h3 >{track.artist_name}</h3>
        <p>
            <strong>
                <i/>Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i /> Album
            </strong>
            : {track.album_name}
        </p>
        <Link to={`lyrics/track/${track.track_id}`} className='min-w-max text-white'>
            <i/>View Lyrics
        </Link>
    </div>
  )
}

export default Track