import React from 'react';
import { Entry } from "./Entry";

export const EntryList = ({ entries }) => {
    return (
        <ul className='w-1/4 float-right'>
            { entries.map(entry => <Entry {...entry} />) }
        </ul>
    );
};
