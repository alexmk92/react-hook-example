import React, { useReducer } from 'react';
import StateContext, { StateProvider } from "./state/StateContext";

// I would normally include a containers directory in this project
// which would compose the components for a page at a given route
// this application is single routed, so I will just use a single
// components directory and compose the components within the
// master container of the app.
const App = props => {
  const [state, dispatch] = useReducer(entriesReducer, []);

  return (
      <StateProvider>
        <div className="App">
          Content here...
        </div>
      </StateProvider>
  );
}

export default App;
