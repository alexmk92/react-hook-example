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
};

const valid = ({ name, dob }) => {
    return !(!name || !dob);
};

export const entryReducer = (state, action) => {
    switch (action.type) {
        case entryTypes.NEW:
            return {
                ...state,
                selected: null
            };
        case entryTypes.CREATE:
            if (!valid(action.payload)) {
                return {
                    ...state,
                    error: 'Must provide a name and date of birth'
                };
            }

            const nextEntry = {
                ...action.payload,
                id: new Date().getTime(),
                createdAt: new Date(),
            };

            return {
                entries: [
                    ...state.entries,
                    nextEntry
                ],
                error: null,
                selected: nextEntry
            };
        case entryTypes.UPDATE:
            if (!valid(action.payload)) {
                return {
                    ...state,
                    error: 'Must provide a name and date of birth'
                };
            }

            const existing = state.entries.find(item => item.id === action.payload.id);
            if (existing) {
                return {
                    entries: [
                        ...state.entries.filter(item => item.id !== action.payload.id),
                        {
                            ...existing,
                            ...action.payload
                        }
                    ],
                    error: null,
                    selected: existing
                }
            }

            return state;
        case entryTypes.DELETE:
            const newEntries = state.entries.filter(item => item.id !== action.payload.id);

            return {
                selected: newEntries[newEntries.length-1],
                entries: newEntries,
                error: null,
            };
        case entryTypes.RELOAD:
            return action.payload;
        case entryTypes.SELECT:
            return {
                ...state,
                selected: state.entries.find(item => item.id === action.payload.id),
                error: null,
            };
        default:
            return state;
    }
};
