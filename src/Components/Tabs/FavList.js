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
  Button
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

  useEffect(() => {
    const { id } = info.params;
    axiosWithAuth()
      .get(`/accounts/${id}/favorites`)
      .then(response => {
        console.log(response);
        //   setFavorites(response.data.results);
      })
      .catch(error => {
        console.log('Server Error', error);
      });
  }, []);

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
  return (
    <Box direction="column">
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
        {favorites.map((favorite, id) => (
          <TableRow key={id}>
            <TableCell scope="row">
              <strong>{favorite.track_name}</strong>
            </TableCell>
            <TableCell>{favorite.artist_name}</TableCell>
            <TableCell>{favorite.duration_ms / 1000}</TableCell>
            <TableCell>
              <Button label="Delete" onClick={() => deleteSong()} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <SongCard key={song.track_id} song={song} /> */}
    </Box>
  );
}

export default FavList;
