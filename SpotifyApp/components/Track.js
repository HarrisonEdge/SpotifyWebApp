import React from 'react';


function Track() {

    //get track from API


    return (
        <div className='Track'>
            <div className='Track-information'>
                <h3></h3>
                <p></p>
            </div>
            <button onClick={handleRemove} className='Track-action'></button>
        </div>
    )
}

export default Track;