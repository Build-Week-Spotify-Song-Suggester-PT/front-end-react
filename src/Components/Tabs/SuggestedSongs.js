import React, { useState, useEffect } from "react"
import { axiosWithAuth } from "../../Auth/AxiosWithAuth";
import Dropdown from "./Dropdown";

function SuggestedSongs() {

    const [feature, setFeature] = useState('');
    const [songs, setSongs] = useState([]);
    const [favorites, setFavorites] = useState([{}]);


    // const handleSubmit = (values, { setStatus }) => {
    //     // setStatus("loading");
    //     axios
    //       .post("https://songsight-api.herokuapp.com/", values)
    //       .then(res => setStatus(res.data))
    //       .catch(err => console.log(err));
    //   }

    useEffect(() => {
        axiosWithAuth()
        .post(`https://songsight-api.herokuapp.com/${feature}`)
        .then(response => {
          console.log(response);
          setSongs(response.track_name);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
  
    }, [feature]);
    
    const handleChange = (event) => {
      event.preventDefault();
      setFeature(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('submitting...');
    };

    return (
        <section className="suggested-song-list">
            <Dropdown />
            {/* {songs.map(song => (
                <SongCard key={song.track_id} song={song} />
            ))} */}
        </section>
    )
}

export default SuggestedSongs;