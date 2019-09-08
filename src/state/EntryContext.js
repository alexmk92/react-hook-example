import React from 'react';

// Responsible for passing the state of the entryReducer down to any
// subscribed components.
const EntryContext = React.createContext({});

export const EntryProvider = EntryContext.Provider;
export const EntryConsumer = EntryContext.Consumer;

export default EntryContext;
