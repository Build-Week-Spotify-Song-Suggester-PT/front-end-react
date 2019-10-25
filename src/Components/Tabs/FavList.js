import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Button
} from 'grommet';

function FavList({ info }) {

  const [favorites, setFavorites] = useState([{}]);

  const deleteSong = song => {
    const newArray = favorites.filter(song => {
      return song.track_id;
    });
  };

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

  console.log('this is the list', favorites);
  return (
    <Table>
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
    </Table>
  );
}

export default FavList;
