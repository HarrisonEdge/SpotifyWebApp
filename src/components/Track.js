import React, { useCallback } from "react";
import Styles from '../styles/app.module.css';

const Track = (props) => {
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        },
        [props.onRemove, props.track]
    );

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className={Styles.TrackAction} onClick={removeTrack}>
                    -
                </button>
            );
        }
        return (
            <button className={Styles.TrackAction} onClick={addTrack}>
                +
            </button>
        );
    };

    return (
        <div className={Styles.Track}>
            <div className={Styles.TrackInformation}>
                <h3 className={Styles.TrackInformation_h3}>{props.track.name}</h3>
                <p className={Styles.TrackInformation_p}>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track;
