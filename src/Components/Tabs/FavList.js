import React, { useState, useEffect, Fragment } from 'react';
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';
import Loading from '../Loading';

import {
  Button,
  Box,
  Heading,
  DataTable
} from 'grommet';

function FavList({ info }) {
  const [favorites, setFavorites] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState('');

  const { id } = info.params;
  useEffect(() => {
    axiosWithAuth()
      .get(`/accounts/${id}/favorites`)
      .then(response => {
        setFavorites(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Server Error', error);
      });
  }, [id]);

  const removeSong = song => {
    const songValue = {
      track_id: `${song}`
    };

    const newArray = favorites.filter(favorite => {
      return favorite.track_id !== songValue.track_id;
    });

    axiosWithAuth()
      .delete(`/accounts/${id}/favorites/${song}`)
      .then(res => {
        // console.log(res);
        setDeleteMessage(res.data.message);
        setTimeout(() => {
          setDeleteMessage('');
        }, 3000);
      })
      .catch(error => {
        console.log(error);
      });
    setFavorites(newArray);
  };

  if (loading) {
    return <Loading />;
  }

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
    {
      property: 'Button',
      header: 'Remove Song',
    }
    
  
    
  ];
  
  const DATA = favorites.map(song => ({
    Key: song.track_id,
    Artist: song.artist_name,
    Song: song.track_name,
    Duration: song.duration_ms / 1000 + ' ms',
    Button:  <Button
    label="Remove"
    onClick={() => removeSong(song.track_id)}  primary color="#000"
    margin='xsmall'
  />
  }));

  return (
    <Fragment>
      <Box
        align="center"
        responsive={true}
        direction="row"
        height="xxsmall"
        alignSelf="center"
      >
        {deleteMessage ? (
          <Heading level="3" margin="none" color="#0B5351">
            {deleteMessage}
          </Heading>
        ) : null}
      </Box>
  <Box margin='0 auto' width='100%' align='center' height='600px' responsive={true} >
      <DataTable sortable='true' size='medium' columns={columns} data={DATA} background={{
      header: "dark-1",
      body: ["dark-3", "dark-2"],
      footer: "dark-3"
      }} />
  </Box>
  </Fragment>
  )  
  
    
     
}

export default FavList;
