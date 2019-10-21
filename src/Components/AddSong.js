import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/AxiosWithAuth';

const AddSong = ({ updateSongs }) => {
    const [newSong, setNewSong] = useState({ song: "", trackid: "", err: null });

    const handleChange = e => {
        setNewSong({ ...newSong, [e.target.name]: e.target.value, err: null });
    };

    const handleSubmit = e => {
        e.preventDefault();
        newSong.song === "" || newSong.trackid.indexOf("#") !== 0 ? setNewSong({
            ...newSong, 
            // err: "Please complete all new song  fields...."
        })
        : !newSong.trackid.match("#") || newSong.trackid.indexOf("#") !== 0
        ? setNewSong({
            ...newSong, 
            err: "Song track id must begin with..."
        })
        : axiosWithAuth()
        .post("http://", {
            song: newSong.song,
            trackid: { trackid: newSong.trackid },
            trackid: new Date().getTime()
        })
        .then(res => {
            axiosWithAuth()
            .get("")
            .then( res => {
                updateSongs(res.data);
                setNewSong({ song: "", trackid: "", err: null });
            })
            .catch(error => console.log(error));
        })
        .catch(error =>
            console.log(
                setNewSong({
                    ...newSong, 
                    err: 
                    "There was an error adding this song. Please try another valid song track id."
                })
            )
            );
    };

    return (
        <form className = "addSong">
            <legend>add song</legend>
            <label>
                song name:
                <input name = "song" value={newSong.song} onChange={handleChange} />
            </label>
            <label>
                trackid: 
                <input name = "track id" value={newSong.trackid} onChange={handleChange} />
            </label>
            <div className="button-row">
                <button type="submit" onClick={handleSubmit}>
                    save
                </button>
            </div>
            {newSong.err && <div className="error-container">{newSong.err}</div>}
        </form>
    );
};

export default AddSong;
