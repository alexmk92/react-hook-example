import React, { useReducer, useEffect } from 'react';
import { EntryProvider } from "./state/EntryContext";

import { entryReducer, entryTypes, initialEntryState } from "./reducers/entryReducer";
import { EntryList } from "./components/EntryList";
import {NewEntryForm} from "./components/NewEntryForm";

// I would normally include a containers directory in this project
// which would compose the components for a page at a given route
// this application is single routed, so I will just use a single
// components directory and compose the components within the
// master container of the app.
const App = props => {
    const [entryState, dispatch] = useReducer(entryReducer, initialEntryState);
    const { entries, selected, error } = entryState;

    // An empty array for useEffect means there is nothing to subscribe to,
    // in this case we will only try to load when the component mounts.
    useEffect(() => {
        const rawEntries = localStorage.getItem('entries');
        dispatch({ type: entryTypes.RELOAD, payload: JSON.parse(rawEntries) });
    }, []);

    // Whenever the `entries` value changes, we will persist it to local storage
    // so that we can load between sessions.
    useEffect(() => {
        localStorage.setItem('entries', JSON.stringify(entryState))
    }, [selected, entries]);

    return (
        <EntryProvider value={{ state: entryState, dispatch }}>
            <div className='md:flex h-screen bg-gray-400'>
                { error ? <div className='w-screen md:w-2/3 md:absolute bg-red-500 text-white top-0 py-4 px-4'>{error}</div> : null }
                <div className='w-full md:w-2/3 bg-gray-700 md:h-full md:flex md:justify-center md:items-center'>
                    <NewEntryForm />
                </div>
                <div className='w-full md:w-1/3 bg-gray-400 md:h-full py-5'>
                    <h2 className='max-w-lg px-4 text-xl'>Entry History</h2>
                    <br/>
                    <EntryList entries={entries} />
                </div>
            </div>
        </EntryProvider>
    );
};

export default App;
