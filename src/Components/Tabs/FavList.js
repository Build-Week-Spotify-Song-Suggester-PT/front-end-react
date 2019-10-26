import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';
import Dropdown from './Dropdown';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
  Box,
  Button,
  Heading, DataTable
} from 'grommet';

function FavList({ info }) {
  //info.params.id === user ID from url

  const [favorites, setFavorites] = useState([{}]);

  const deleteSong = song => {
    const newArray = favorites.filter(song => {
      return song.track_id;
    });
  };
  // const handleSubmit = (values, { setStatus }) => {
  //     // setStatus("loading");
  //     axios
  //       .post("https://songsight-api.herokuapp.com/", values)
  //       .then(res => setStatus(res.data))
  //       .catch(err => console.log(err));
  //   }

  const { id } = info.params;
  useEffect(() => {
    axiosWithAuth()
      .get(`/accounts/${id}/favorites`)
      .then(response => {
        console.log('this is in the call', response);
        setFavorites(response.data);
      })
      .catch(error => {
        console.log('Server Error', error);
      });
  }, [id]);

  // useEffect(() => {
  //     axiosWithAuth()
  //     .post(`https://songsight-api.herokuapp.com/music/save`, favorites)
  //     .then(response => {
  //       console.log(response.data.results);
  //     })
  //     .catch(error => {
  //       console.log('Server Error', error);
  //     });

  // }, [favorites]);

  // className="suggested-song-list"
  console.log('this is the list', favorites);
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
    
  
    
  ];
  
  const DATA = favorites.map(song => ({
    Key: song.track_id,
    Artist: song.artist_name,
    Song: song.track_name,
    Duration: song.duration_ms / 1000 + ' ms',
  }));

  return (
  <Box margin='0 auto' width='100%' height='1050px' responsive='true' background={{ color:'white'
}}>
    <Box align='center' margin='5px auto' width='100%' responsive='true' >
      <Heading color='white' margin='auto'>My Music</Heading>
      <DataTable  sortable='false' size='medium' columns={columns} data={DATA} background={{
      header: "dark-4",
      body: ["neutral-3", "neutral-2"],
      footer: "dark-3"
      }} />
    </Box>
  </Box>
  )  
}

export default FavList;
