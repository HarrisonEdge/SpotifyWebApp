import React from "react";
import Styles from '../styles/app.module.css';

import Track from '../components/Track';

const TrackList = (props) => {
    return (
        <div className={Styles.TrackList}>
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                    />
                );
            })}
        </div>
    );
};

export default TrackList;