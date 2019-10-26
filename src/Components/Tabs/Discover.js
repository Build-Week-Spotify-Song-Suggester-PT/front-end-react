import React, { useState, useEffect } from "react"
import { axiosWithAuth } from "../../Auth/AxiosWithAuth";
import Dropdown from "./Dropdown";
import {
    Table, TableBody, TableCell, TableHeader, TableRow,
    Text, Box, Button, Heading, DataTable
  } from 'grommet';

function Discover() {

    const [songs, setSongs] = useState([]);
    const [favorites, setFavorites] = useState({});

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
        console.log(song);
        const songValue = {
            "track_id": `${song}`
        }
        console.log(songValue);
        axiosWithAuth()
            .post("/music/save", songValue)
            .then((res) => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    };
    // const addSong = song => {
    //     const newSong = {
    //         song: {song}
    //         // id: song.track_id,
    //         // title: song.track_name,
    //         // artist: song.artist_name,
    //         // length: song.duration_ms
    //     }
        
    //     setFavorites([...favorites, newSong])
    // };

    const deleteSong = song => {
        const newArray = favorites.filter(song => {
            return song.track_id
        })
    }

    useEffect(() => {
        axiosWithAuth()
        .post(`/music/similar`, song)
        .then(response => {
          console.log(response.data.results);
          setSongs(response.data.results);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
  
    }, []);

    // useEffect(() => {
    //     axiosWithAuth()
    //     .post(`/music/save`, favorites.track_id)
    //     .then(response => {
    //       console.log(response.data.results);
    //     })
    //     .catch(error => {
    //       console.log('Server Error', error);
    //     });
  
    // }, [favorites]);
    

    const columns = [
        
        {
          property: 'Artist',
          header: 'Artist',
        },
        {
          property: 'Song',
          header: 'Song',
        },
        {
            property: 'Duration',
            header: 'Duration',
        },
        {
            property: 'Button',
            header: 'Add Song',
        }
        
      
        
      ];
      
      const DATA = songs.map(song => ({
        Key: song.track_id,
        Artist: song.artist_name,
        Song: song.track_name,
        Duration: song.duration_ms / 1000 + ' ms',
        Button: <Button label="Add" onClick={() => addSong(song.track_id)} />
      }));
      
      
      return (
        <Box margin='0 auto' width='100%' height='1050px' responsive='true' >
            <Box align='center' color='black' margin='5px auto' width='100%' responsive='true'>
                <Heading color='white' margin='auto'>Playlist</Heading>
                <DataTable color='white' sortable='true' size='large' columns={columns} data={DATA} background={{
    header: "dark-3",
      body: ["neutral-3", "neutral-2"],
      footer: "dark-3"
      }} />
            </Box>
        </Box>
      )
      
}

export default Discover;