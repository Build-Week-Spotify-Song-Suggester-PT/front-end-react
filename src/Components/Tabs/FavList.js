import React, { useState, useEffect, Fragment } from 'react';
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';
import Loading from '../Loading';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Button,
  Box,
  Button,
  Heading, DataTable
  Heading
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
      <Table alignSelf="center">
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom" size="medium">
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
          {favorites.map((favorite, id) => (
            <TableRow key={id}>
              <TableCell scope="row">
                <strong>{favorite.track_name}</strong>
              </TableCell>
              <TableCell>{favorite.artist_name}</TableCell>
              <TableCell>{favorite.duration_ms / 1000}</TableCell>
              <TableCell>
                <Button
                  label="Remove"
                  onClick={() => removeSong(favorite.track_id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
}

export default FavList;
