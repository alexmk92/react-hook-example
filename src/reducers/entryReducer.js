export const entryTypes = {
    CREATE: 'create',
    DELETE: 'delete',
};

export const entryReducer = (state, action) => {
    switch (action.type) {
        case entryTypes.CREATE:
            return [
                ...state,
                {
                    id: new Date().getTime(),
                    username: 'AlexMK92',
                    dob: new Date(),
                    createdAt: new Date(),
                }
            ];
    }
};
