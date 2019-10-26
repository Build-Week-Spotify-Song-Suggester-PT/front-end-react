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
        console.log(response.data.results);
        setSongs(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.log('Server Error', error);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const addSong = song => {
    console.log(song);
    const songValue = {
      track_id: `${song}`
    };
    console.log(songValue);
    axiosWithAuth()
      .post('/music/save', songValue)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // className="suggested-song-list"
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
        {songs.map((song, id) => (
          <TableRow key={id}>
            <TableCell scope="row" key={song.track_id}>
              <strong>{song.track_name}</strong>
            </TableCell>
            <TableCell>{song.artist_name}</TableCell>
            <TableCell>{song.duration_ms / 1000}</TableCell>
            <TableCell>
              <Button label="Add" onClick={() => addSong(song.track_id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Discover;
