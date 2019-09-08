import React, { useReducer } from 'react';
import EntryContext, { EntryProvider } from "./state/EntryContext";

import { entryReducer, entryTypes, initialEntryState } from "./reducers/entryReducer";
import { EntryList } from "./components/EntryList";

// I would normally include a containers directory in this project
// which would compose the components for a page at a given route
// this application is single routed, so I will just use a single
// components directory and compose the components within the
// master container of the app.
const App = props => {
  const [entryState, dispatch] = useReducer(entryReducer, initialEntryState);

  const { entries } = entryState;

  return (
      <EntryProvider value={dispatch}>
        <div className="App">
          <button onClick={() => dispatch({ type: entryTypes.CREATE })}>Add</button>
          <EntryList entries={entries} />
        </div>
      </EntryProvider>
  );
};

export default App;
