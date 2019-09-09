export const entryTypes = {
    CREATE: 'create',
    DELETE: 'delete',
    SELECT: 'select',
    RELOAD: 'reload',
};

export const initialEntryState = {
    selected: null,
    entries: [],
};

export const entryReducer = (state, action) => {
    console.log(action, state);
    switch (action.type) {
        case entryTypes.CREATE:
            return {
                selected: null,
                entries: [
                    ...state.entries,
                    {
                        id: new Date().getTime(),
                        username: 'AlexMK92',
                        dob: new Date(),
                        createdAt: new Date(),
                    }
                ]
            };
        case entryTypes.DELETE:
            return {
                selected: null,
                entries: state.entries.filter(item => item.id !== action.payload.id)
            };
        case entryTypes.RELOAD:
            return action.payload;
        case entryTypes.SELECT:
            return {
                ...state,
                selected: state.entries.find(item => item.id === action.payload.id)
            };
        default:
            return state;
    }
};
