import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';
import {
  Select,
  FormField,
  Form,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
  Box
} from 'grommet';

function SuggestedSongs() {
  const [suggested, setSuggested] = useState([]);
  const [mood, setMood] = useState({
    feature: 'acousticness',
    value: 'medium',
    limit: 20
  });

  useEffect(() => {
    axiosWithAuth()
      .post(`/music/mood`, mood)
      .then(response => {
        setSuggested(response.data);
      })
      .catch(error => {
        console.log('Server Error', error);
      });
  }, [mood]);

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

  const handleSubmit = event => {
    event.preventDefault();
    setMood(event.value);
  };

  return (
    <section className="suggested-song-list">
      <Form onSubmit={handleSubmit}>
        <FormField
          label="Feature"
          name="feature"
          value={mood.feature}
          component={Select}
          options={[
            'acousticness',
            'danceability',
            'energy',
            'instrumentalness',
            'liveness',
            'loudness',
            'speechiness',
            'tempo'
          ]}
        />
        <FormField
          label="Value"
          name="value"
          value={mood.value}
          component={Select}
          options={['Low', 'Medium', 'High']}
        />
        <Button type="submit" label="Submit" primary={true} />
      </Form>
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
          {suggested.map((suggested, id) => (
            <TableRow key={id}>
              <TableCell scope="row" key={suggested.track_id}>
                <strong>{suggested.track_name}</strong>
              </TableCell>
              <TableCell>{suggested.artist_name}</TableCell>
              <TableCell>{suggested.duration_ms / 1000}</TableCell>
              <TableCell>
                <Button
                  label="Add"
                  onClick={() => addSong(suggested.track_id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default SuggestedSongs;
