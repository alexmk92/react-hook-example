import React from 'react';
import { Entry } from "./Entry";

export const EntryList = ({ entries }) => {
    return (
        <ul>
            { entries.map(entry => <Entry {...entry} />) }
        </ul>
    );
};
