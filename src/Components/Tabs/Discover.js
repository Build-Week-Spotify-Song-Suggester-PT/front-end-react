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

function Discover() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

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
        // console.log(res);
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
        console.log(response);
        setSongs(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.log('Server Error', error);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Table margin={{ horizontal: 'auto' }}>
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
        {songs.map((song, id) => (
          <TableRow key={id}>
            <TableCell scope="row" key={song.track_id}>
              <strong>{song.track_name}</strong>
            </TableCell>
            <TableCell>{song.artist_name}</TableCell>
            <TableCell>{song.duration_ms / 1000}</TableCell>
            <TableCell>
              <Button
                margin="xsmall"
                label="Add Song"
                onClick={() => addSong(song.track_id)}
              />
              <Button
                margin="xsmall"
                label="Get Similar"
                onClick={() => getSimilar(song.track_id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Discover;
