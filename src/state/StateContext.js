import React from 'react';

// Default the initial state of this context to an empty value,
// in this application we could have multiple contexts, which
// we wrap our components in as a HOC, but the application
// is so simple that a StateContext should suffice.
const StateContext = React.createContext({});

export const StateProvider = StateContext.Provider;
export const StateConsumer = StateContext.Consumer;

export default StateContext;
