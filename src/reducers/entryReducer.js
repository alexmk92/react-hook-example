import {
    newEntry, createEntry, deleteEntry,
    reloadEntries, updateEntry, selectEntry
} from "../actions/entries";

export const entryTypes = {
    CREATE: 'create',
    UPDATE: 'update',
    DELETE: 'delete',
    SELECT: 'select',
    RELOAD: 'reload',
    NEW:    'new',
};

export const initialEntryState = {
    selected: null,
    entries: [],
    error: null
};

export const entryReducer = (state, action) => {
    const { payload } = action;
    switch (action.type) {
        case entryTypes.NEW: return newEntry({ state, payload });
        case entryTypes.CREATE: return createEntry({ state, payload });
        case entryTypes.UPDATE: return updateEntry({ state, payload });
        case entryTypes.DELETE: return deleteEntry({ state, payload });
        case entryTypes.RELOAD: return reloadEntries({ state, payload });
        case entryTypes.SELECT: return selectEntry({ state, payload });
        default: return state;
    }
};
