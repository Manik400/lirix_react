import React, { useState, useContext, useEffect } from "react";
import { TrackContext } from "../Context/Context";
import axios from "axios";
import img1 from "../lirix_banner1.png";

const Search = () => {
  const [state, setState,search,setSearch] = useContext(TrackContext);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    if(trackTitle !== ""){
      axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_Lirix_Key}`
      )
      .then((res) => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: "Search Results" });
        // console.log(track_list);
      })
      .catch((err) => console.log(err));
    }
  }, [trackTitle]);

  const findTrack = (e) => {
    e.preventDefault();
    setSearch(true);
    setTrackTitle(userInput);
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="flex justify-around bg-black">
      <img src={img1} className="w-2/5" />
      <div className="flex  justify-start items-center flex-col min-h-80 px-32 mx-16 text-white">
        <h1 className="pt-8 pb-16 text-3xl text-center">
          <span>Search For A Song</span>
        </h1>
        <div className="text-center">
          <p>Get the lyrics for any song</p>
          <form
            onSubmit={findTrack}
            className="flex flex-col justify-center items-center"
          >
            <div className="w-72 py-4">
              <div className="relative w-full min-w-[200px] h-10">
                <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                  <i className="fas fa-heart" aria-hidden="true"></i>
                </div>
                <input
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900"
                  type="text"
                  placeholder=""
                  name="userInput"
                  value={userInput}
                  onChange={onChange}
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Song with Title
                </label>
              </div>
            </div>

            <button type="submit" className="w-72">
              Get Track Lyrics
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
