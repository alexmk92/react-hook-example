import React, { useEffect, useContext } from 'react';
import { Entry } from "./Entry";
import {entryTypes} from "../reducers/entryReducer";
import EntryContext from "../state/EntryContext";

export const EntryList = ({ entries }) => {
    const { state, dispatch } = useContext(EntryContext);

    useEffect(() => {
        dispatch({ type: entryTypes.SELECT, payload: null })
    }, [state.entries.length]);

    return (
        <ul>{ entries.map(entry => <Entry {...entry} />) }</ul>
    );
};
