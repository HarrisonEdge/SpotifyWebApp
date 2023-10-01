import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import SearchResults from './components/SearchResults'
import Styles from './styles/app.module.css';





function App() {

    return (
        <div>
            <h1>Ja<span className={Styles.highlight}>mmm</span>ing</h1>
            <div className={Styles.App}>
                <SearchBar />
            </div>
        </div >
    );
}

export default App;
