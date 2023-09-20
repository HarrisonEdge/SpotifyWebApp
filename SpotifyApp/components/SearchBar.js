import React, { useState } from 'react';

function SearchBar({ userInput }) {

    //styles
    const h1 = {
        fontSize: 24,
        fontWeight: bold
    }

    const blueSpan = {
        color: blue
    }



    return (
        <div className='SearchBar'>
            <input type='text' value={userInput} placeholder='Enter a Song Title' />
            <button onClick={handleSearch}>SEARCH</button>
        </div>

    )
}

export default SearchBar;