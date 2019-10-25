import React, { useState, useEffect } from "react"
import { axiosWithAuth } from "../../Auth/AxiosWithAuth";
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
 } from "grommet";


function SuggestedSongs() {

    // const [feature, setFeature] = useState('');
    const [suggested, setSuggested] = useState([]);
    const [mood, setMood] = useState({"feature": "acousticness", "value": "medium", "limit": 20})

    // const handleSubmit = (values, { setStatus }) => {
    //     // setStatus("loading");
    //     axios
    //       .post("https://songsight-api.herokuapp.com/", values)
    //       .then(res => setStatus(res.data))
    //       .catch(err => console.log(err));
    //   }

    useEffect(() => {
      // const mood = {
      //   "feature": `${feature}`,
      //   "value": `${level}`,
      //   "limit": 20
      // }
        axiosWithAuth()
        .post(`/music/mood`, mood)
        .then(response => {
          console.log(response);
          setSuggested(response.data);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
  
    }, [mood]);

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
    
    // const handleChange = (event) => {
    //   event.preventDefault();
    //   // setMood({...mood, [event.name]: event.value});
    // };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('submitting...', event);
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
                  // onChange={handleChange}
                  options={['acousticness', 'danceability', 'energy', 'instrumentalness', 'liveness', 'loudness', 'speechiness', 'tempo']}
              />
              <FormField
                  label="Value"
                  name="value"
                  value={mood.value}
                  component={Select}
                  // onChange={handleChange}
                  options={["Low", "Medium", "High"]}
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
                      <Button label="Add" onClick={() => addSong(suggested.track_id)} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </section>
    )
}

export default SuggestedSongs;