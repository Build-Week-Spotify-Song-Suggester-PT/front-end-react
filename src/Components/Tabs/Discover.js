import React, { useState, useEffect, Fragment } from 'react';
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';
import Loading from '../Loading';
import {
  Button,
  Box,
  Heading,
  DataTable
} from 'grommet';

function Discover() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [songMessage, setSongMessage] = useState('');

  useEffect(() => {
    const initialSong = {
      track_id: '5lzb11BOouSBDXxhTnTtpv',
      number_like: 20
    };

    axiosWithAuth()
      .post('/music/similar', initialSong)
      .then(response => {
        setSongs(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.log('Server Error', error);
      });
  }, []);

  const addSong = song => {
    const songValue = {
      track_id: `${song}`
    };
    axiosWithAuth()
      .post('/music/save', songValue)
      .then(res => {
        setSongMessage(res.data.message);
        setTimeout(() => {
          setSongMessage('');
        }, 2000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getSimilar = song => {
    setLoading(true);
    const songValue = {
      track_id: `${song}`,
      number_like: 20
    };

    axiosWithAuth()
      .post('/music/similar', songValue)
      .then(response => {
        setSongs(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.log('Server Error', error);
      });
  };

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
    },
    {
        property: 'Button2',
        header: 'Similar Songs',
    }
    
  
    
  ];
  
  const DATA = songs.map(song => ({
    Key: song.track_id,
    Artist: song.artist_name,
    Song: song.track_name,
    Duration: song.duration_ms / 1000 + ' ms',
    Button: <Button margin="xsmall"
    label="Add"
    onClick={() => addSong(song.track_id)} 
    primary color="#000"
    />,
    
    Button2: <Button
    margin="xsmall"
    label="Similar"
    onClick={() => getSimilar(song.track_id)}
    primary color="#000"
  /> 
    
  }));

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <Box
        align="center"
        responsive={true}
        direction="row"
        height="xxsmall"
        alignSelf="center"
      >
        {songMessage ? (
          <Heading level="3" margin="none" color="#0B5351">
            {songMessage}
          </Heading>
        ) : null}
      </Box>
      <Box margin='0 auto' width='100%' align='center' height='600px' responsive={true} >
        
          <DataTable primaryKey='track_id' sortable={true} size='medium' columns={columns} data={DATA} background={{
      header: "dark-1",
      body: ["dark-3", "dark-2"],
      }} />
      </Box>

    </Fragment>
  );
}

export default Discover;