import React, { useReducer, useEffect } from 'react';
import { EntryProvider } from "./state/EntryContext";

import { entryReducer, entryTypes, initialEntryState } from "./reducers/entryReducer";
import { EntryList } from "./components/EntryList";

// I would normally include a containers directory in this project
// which would compose the components for a page at a given route
// this application is single routed, so I will just use a single
// components directory and compose the components within the
// master container of the app.
const App = props => {
    const [entryState, dispatch] = useReducer(entryReducer, initialEntryState);
    const { entries, selected } = entryState;

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
        <EntryProvider value={dispatch}>
            <div>
                <div className='w-3/4'>
                    <button onClick={() => dispatch({ type: entryTypes.CREATE })}>Add</button>
                </div>
                <EntryList entries={entries} />
            </div>
        </EntryProvider>
    );
};

export default App;
