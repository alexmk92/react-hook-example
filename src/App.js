import React, { useReducer } from 'react';
import StateContext, { StateProvider } from "./state/StateContext";

import { Card } from "./components/Card";
import { entryReducer, entryTypes } from "./reducers/entryReducer";

// I would normally include a containers directory in this project
// which would compose the components for a page at a given route
// this application is single routed, so I will just use a single
// components directory and compose the components within the
// master container of the app.
const App = props => {
  const [state, dispatch] = useReducer(entryReducer, []);

  return (
      <StateProvider>
        <div className="App">
          <button onClick={() => dispatch({ type: entryTypes.CREATE })}>Add</button>
          { state.map((item) => <Card {...item} />) }
        </div>
      </StateProvider>
  );
};

export default App;
