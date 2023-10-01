import React, { useState } from 'react';
import Styles from '../styles/app.module.css';
import TrackList from './TrackList';

function Playlist(props) {


    function handleSave(e) {
        e.preventDefault();
        props.onSave();
    }

    function handleChange(e) {
        e.preventDefault();
        props.onNameChange(e.target.value)
    }


    return (
        <div className={Styles.Playlist}>
            <input className={Styles.PlaylistInput}
                placeholder={props.playlistName}
                onChange={handleChange}
            />
            <TrackList
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />

            <button className={Styles.PlaylistSave}
                onClick={handleSave}>Save To Spotify</button>
        </div>
    )
}

export default Playlist;

/*// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

*/