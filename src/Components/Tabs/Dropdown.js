import React, { useState, useEffect } from "react";
import { Select, Box, FormField } from "grommet";
import { axiosWithAuth } from "../../Auth/AxiosWithAuth";


function Dropdown() {
    const [level, setLevel] = useState('medium');
    const [feature, setFeature] = useState('recommended');

    const [songs, setSongs] = useState([]);

    // const handleSubmit = (values, { setStatus }) => {
    //     // setStatus("loading");
    //     axios
    //       .post("https://songsight-api.herokuapp.com/", values)
    //       .then(res => setStatus(res.data))
    //       .catch(err => console.log(err));
    //   }

    useEffect(() => {
        axiosWithAuth()
        .post(`https://songsight-api.herokuapp.com/${feature}`)
        .then(response => {
          console.log(response);
          setSongs([response]);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
  
    }, [feature]);
    
    const handleChange = (event) => {
      event.preventDefault();
      setFeature(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('submitting...');
    };
        
    return (
        <Box>
            <FormField label="Feature">
                <Select
                    options={['recommended', 'accousticness', 'danceability', 'energy', 'instrumentalness', 'liveness', 'loudness', 'speechiness', 'tempo']}
                    value={feature}
                    onChange={handleChange}
                />
            </FormField>
            <FormField lable="Level">
                <Select
                    options={['low', 'medium', 'high']}
                    value={level}
                    onChange={handleChange}
                />
            </FormField>
            
            
        </Box>
        
    );
    
}

export default Dropdown;