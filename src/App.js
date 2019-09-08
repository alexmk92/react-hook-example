import React from 'react';
import { StateProvider } from "./state/StateContext";

function App() {
  return (
  <StateProvider>
    <div className="App">
      Content here...
    </div>
  </StateProvider>
  );
}

export default App;
