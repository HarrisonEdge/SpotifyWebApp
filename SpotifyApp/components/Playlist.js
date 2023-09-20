import React from 'react';


function Playlist({ trackName }) {
    return (
        <div>
            <input type='text' value={trackName} placeholder='Untitled Playlist' />
        </div>
    )
}

export default Playlist;