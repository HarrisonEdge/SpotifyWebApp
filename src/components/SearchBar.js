import React, { useState, useCallback } from 'react';
import Styles from '../styles/app.module.css';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Spotify from "../util/Spotify";

function SearchBar(props) {

    const [searchResults, setSearchResults] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([]);


    function onChange({ target }) {
        setUserInput(target.value);
    }

    //Styles
    function onHoverEnter(e) {
        e.target.style.background = 'rgba(108, 65, 233, .7)';
    }

    function onHoverExit(e) {
        e.target.style.background = '#010c3f';
    }

    const search = useCallback((userInput) => {
        Spotify.search(userInput).then(setSearchResults);
    }, []);

    const searching = useCallback((e) => {
        e.preventDefault();
        search(userInput);
    }, [search, userInput]);

    //adding and removing tracks
    const addTrack = useCallback(
        (track) => {
            if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
                return;

            setPlaylistTracks((prevTracks) => [...prevTracks, track]);
        },
        [playlistTracks]
    );

    const removeTrack = useCallback((track) => {
        setPlaylistTracks((prevTracks) =>
            prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
        );
    }, []);
    //end of adding and removing tracks

    const updatePlaylistName = useCallback((name) => {
        setPlaylistName(name);
    }, []);

    const savePlaylist = useCallback(() => {
        const trackUris = playlistTracks.map((track) => track.uri);
        Spotify.savePlaylist(playlistName, trackUris).then(() => {
            setPlaylistName("New Playlist");
            setPlaylistTracks([]);
        });
    }, [playlistName, playlistTracks]);

    return (
        <div className={Styles.SearchBar}>
            <input
                placeholder='Enter a Song Title'
                className={Styles.SearchBarInput}
                onChange={onChange} />

            <button
                className={Styles.SearchBarButton}
                onClick={searching}
                onMouseOver={onHoverEnter}
                onMouseOut={onHoverExit}>SEARCH</button>
            <div className={Styles.AppPlaylist}>
                <SearchResults searchResults={searchResults} onAdd={addTrack} />
                <Playlist
                    playlistName={playlistName}
                    playlistTracks={playlistTracks}
                    onNameChange={updatePlaylistName}
                    onRemove={removeTrack}
                    onSave={savePlaylist} />
            </div>
        </div>

    )
}

export default SearchBar;