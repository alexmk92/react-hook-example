export const entryTypes = {
    CREATE: 'create',
    DELETE: 'delete',
    SELECT: 'select',
};

export const initialEntryState = {
    selected: null,
    entries: [],
};

export const entryReducer = (state, action) => {
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
    }
};
