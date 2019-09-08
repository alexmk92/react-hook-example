export const entryReducer = (state, action) => {
    switch (action.type) {
        case 'create':
            return [
                ...state,
                {
                    id: Date.now().getTime(),
                    username: 'AlexMK92',
                    dob: Date.now()
                }
            ];
    }
};
