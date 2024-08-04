import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { res1 } from '../Data';

export const TrackContext = React.createContext();

const TrackContextProvider = ({children}) => {



    let intialState = {
        track_list: [],
        heading: "Top 10 Songs"
        // dispatch: action => this.setState(state => reducer(state, action))
    };

    const [state , setState] = useState(intialState);
    const [search , setSearch] = useState(false);

    useEffect(() => {
        if(search === false){
            axios.get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${process.env.REACT_APP_Lirix_Key}`
            ).then(res => {
                console.log(res.data);
                setState({
                    track_list : res.data.message.body.track_list,
                    heading : "Top 10 Songs"
                });
            })
            .catch(err => console.log(err));
        }
    },[]);
    useEffect(()=> {
        if(search === false){
            axios.get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${process.env.REACT_APP_Lirix_Key}`
            ).then(res => {
                console.log(res.data);
                setState({
                    track_list : res.data.message.body.track_list,
                    heading : "Top 10 Songs"
                });
            })
            .catch(err => console.log(err));
        }
    },[search]);

    return(
        <TrackContext.Provider value={[state , setState, search , setSearch]}>{children}</TrackContext.Provider>
    )
}

export default TrackContextProvider