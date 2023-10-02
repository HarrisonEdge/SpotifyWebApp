import React from 'react';
import Styles from '../styles/app.module.css';
import TrackList from './TrackList';
import { useState, useCallback } from 'react';

function SearchResults(props) {


    return (
        <div className={Styles.SearchResults}>
            <h2>Results</h2>
            <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
    )
}

export default SearchResults;