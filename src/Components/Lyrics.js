import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Moment from "react-moment";
import { Link, useParams } from "react-router-dom";
import { TrackContext } from "../Context/Context";


const Lyrics = (props) => {
  const { id } = useParams();
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
  // const navigate = useNavigate();

  useEffect(() => {
    
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_Lirix_Key}`
      )
      .then((res) => {
        
        let lyrics = res.data.message.body.lyrics;
        setLyrics(lyrics);

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_Lirix_Key}`
        );
      })
      .then((res) => {
        let tracks = res.data.message.body.track;
        setTrack(tracks);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // useEffect(() => {
  //   return () => {
  //     setState({
  //       track_list: [],
  //       heading: "Top 10 Songs",
  //     });
  //   };
  // }, [setState]);
  // const goBack = () => {
  //   setState({
  //     track_list: [],
  //     heading: "Top 10 Songs"
  //   });
  //   navigate('/');
  // };

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return (
      <div>
        <h3>Loading</h3>
      </div>
    );
  } else {
    return (
      <div className="p-8">
        <Link to="/">Go Back</Link>
        <div>
          <h5>
            {track.track_name} by <span>{track.artist_name}</span>
          </h5>
          <div>
            <p>{lyrics.lyrics_body}</p>
          </div>
        </div>

        <ul>
          <li>
            <strong>Album ID</strong>: {track.album_id}
          </li>
          <li>
            <strong>Song Genre</strong>:{" "}
            {track.primary_genres.music_genre_list.length === 0
              ? "NO GENRE AVAILABLE"
              : track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name}
          </li>
          <li>
            <strong>Explicit Words</strong>:{" "}
            {track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li>
            <strong>Release Date</strong>:{" "}
            <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
          </li>
        </ul>
      </div>
    );
  }
};

export default Lyrics;
