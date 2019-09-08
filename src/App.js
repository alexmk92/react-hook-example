import React, { useReducer } from 'react';
import StateContext, { StateProvider } from "./state/StateContext";

import { entryReducer, entryTypes, initialEntryState } from "./reducers/entryReducer";
import {EntryList} from "./components/EntryList";

// I would normally include a containers directory in this project
// which would compose the components for a page at a given route
// this application is single routed, so I will just use a single
// components directory and compose the components within the
// master container of the app.
const App = props => {
  const [entryState, dispatch] = useReducer(entryReducer, initialEntryState);

  const { entries } = entryState;

  return (
      <StateProvider>
        <div className="App">
          <button onClick={() => dispatch({ type: entryTypes.CREATE })}>Add</button>
          <EntryList entries={entries} />
        </div>
      </StateProvider>
  );
};

export default App;
