import './styles/App';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import SearchResults from './components/SearchResults'
import Track from './components/Track';
import Tracklist from './components/Tracklist';


function App() {

    const [userInput, setUserInput] = useState('');
    const [trackList, setTrackList] = useState([]);
    const [trackName, setTrackName] = useState('');

    return (
        <div>
            <h1>Ja<span className='highlight'>mmm</span>ing</h1>
            <div className='App'>
                <SearchBar input={userInput} />
                <div className='App-playlist'>
                    <SearchResults>
                        <Tracklist trackList={trackList} />
                    </SearchResults>
                    <Playlist trackName={trackName}>
                        <Tracklist />
                    </Playlist>
                </div>
                <button className='Playlist-save' onClick={handleSave}>Save To Spotify</button>
            </div>
        </div>
        //put components in here
    );
}

export default App;
