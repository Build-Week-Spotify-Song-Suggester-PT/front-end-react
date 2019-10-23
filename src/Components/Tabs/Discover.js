import React, { useState, useEffect } from "react"
import { axiosWithAuth } from "../../Auth/AxiosWithAuth";
import Dropdown from "./Dropdown";
import {
    Table, TableBody, TableCell, TableHeader, TableRow,
    Text, Box, Button
  } from 'grommet';

function Discover() {

    const [songs, setSongs] = useState([]);
    const [favorites, setFavorites] = useState([{}]);

    // const handleSubmit = (values, { setStatus }) => {
    //     // setStatus("loading");
    //     axios
    //       .post("https://songsight-api.herokuapp.com/", values)
    //       .then(res => setStatus(res.data))
    //       .catch(err => console.log(err));
    //   }

    const song = {
        track_id: "5lzb11BOouSBDXxhTnTtpv",
        number_like: 20

    };

    const addSong = song => {
        const newSong = {
            song: {song}
            // id: song.track_id,
            // title: song.track_name,
            // artist: song.artist_name,
            // length: song.duration_ms
        }
        
        setFavorites([...favorites, newSong])
    };

    const deleteSong = song => {
        const newArray = favorites.filter(song => {
            return song.track_id
        })
    }

    useEffect(() => {
        axiosWithAuth()
        .post(`https://songsight-api.herokuapp.com/music/similar`, song)
        .then(response => {
          console.log(response.data.results);
          setSongs(response.data.results);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
  
    }, []);

    useEffect(() => {
        axiosWithAuth()
        .post(`https://songsight-api.herokuapp.com/music/save`, favorites)
        .then(response => {
          console.log(response.data.results);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
  
    }, []);
    

    return (
        <Box className="suggested-song-list">
            {/* <Dropdown /> */}
            <TableHeader>
                <TableRow>
                    <TableCell scope="col" border="bottom">
                    Song Title
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                    Artist Name
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                    Duration
                    </TableCell>
                </TableRow>
            </TableHeader>
                <TableBody>
                {songs.map(song => (
                    <TableRow>
                        <TableCell scope="row" key={song.track_id}>
                            <strong>{song.track_name}</strong>
                        </TableCell>
                        <TableCell>{song.artist_name}</TableCell>
                        <TableCell>{song.duration_ms/1000}</TableCell>
                        <TableCell>
                            <Button
                                label="Add"
                                onClick={() => {addSong();}}
                            />
                        </TableCell>
                    </TableRow>
                ))}

              </TableBody>
            {/* <SongCard key={song.track_id} song={song} /> */}
        </Box>
    )
}

export default Discover;