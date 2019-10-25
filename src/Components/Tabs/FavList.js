import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';
import Loading from '../Loading';

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
  const [loading, setLoading] = useState(true);

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
    console.log(song);
    const songValue = {
      track_id: `${song}`
    };
    console.log(songValue);

    const newArray = favorites.filter(favorite => {
      return favorite.track_id !== songValue.track_id;
    });
    console.log(newArray);

    axiosWithAuth()
      .delete(`/accounts/${id}/favorites/${song}`)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    setFavorites(newArray);
  };

  if (loading) {
    return <Loading />;
  }

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
              <Button
                label="Remove"
                onClick={() => removeSong(favorite.track_id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default FavList;
