// grommet styles need to be researched and applied
import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../auth/AxiosWithAuth';

const initialSong = {
    artistname: '',
    trackid:  '',
    trackname:  '',
    seed: {}
};

const FavlList = ({ songs, updateSongs }) => {
    console.log(songs);
    const[editing, setEditing] = useState(false);
    const[songToEdit, setSongToEdit] = useState(initialSong);

    const editSong = song => {
        setEditing(true);
        console.log(song);
    };

    const saveEdit = e => {
        e.preventDefault();
        // make a put request to save your updated song
        axiosWithAuth()
        .put(`/songs/${songToEdit.trackid}`, songToEdit)  
        // where will we get the id from..
        .then(response => {
            updateSongs([
                ...songs.filter(song => song.trackid !== songToEdit.trackid),
                response.data,
            ])
            setEditing(false);
        })
        .catch(error => console.log(error));
    };

    return (
        <div className='song-wrap'>
            <header>Songs You have SEEN</header>
            <ul>
                {songs.map(song => (
                    <li key={song.song} onClick={() => editSong(song)}>
                        <span>
                            <span className='delete' onClick={() => deleteSong(song)}>
                                x
                            </span>{" "}
                            {song.song}
                        </span>
                        <div
                        className="song-box"
                        // style={{}}
                        />
                    </li>
                ))}
            </ul>
            {editing && (
                <form onSubmit={saveEdit}>
                    <legend>Edit Song</legend>
                    <label>
                        Song name:
                        <input
                        onChange={e =>
                        setColorToEdit({...songToEdit, song: e.target.value })
                    }
                    value={songToEdit.song}
                    />
                    </label>
                    <label>
                        {/* song id would not really work, probably Track name  */}
                        song id:
                        <input
                        onChange={e =>
                        setSongToEdit({
                            ...songToEdit, 
                            // id: {    : e.target.value}
                            // seed:{    : e.target.value}
                        })
                    }
                    // value={songToEdit.id}
                    />
                    </label>
                    <div className="button-row">
                        <button type="submit">Save Song</button>
                        <button onClick={() => setEditing(false)}>Cancel</button>                        
                    </div>
                </form>
            )}
            <AddSong updateSongs={updateSongs} />
            <div className="spacer">
            </div>
                    </div>
    );
};

export default FavlList;