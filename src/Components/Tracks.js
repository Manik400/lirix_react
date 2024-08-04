import React, { useContext } from 'react'
import { TrackContext } from '../Context/Context'
import Track from './Track';


const Tracks = () => {

    const [state] = useContext(TrackContext);
    const { track_list, heading } = state;

    if (track_list === undefined || track_list.length === 0) {
        return <div><h3>searching</h3></div>
    }else{
        return(
            <div className='flex flex-col items-center bg-black border-white'>
                <h3 className='text-xl text-white py-8'>{heading}</h3>
                <div className="grid grid-cols-2 items-center pb-8">
                    {
                        track_list.map(
                            i => (
                                <Track key={i.track.track_id} track={i.track}/>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Tracks