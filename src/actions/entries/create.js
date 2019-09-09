import validate from "./validate";

export default ({ state, payload }) => {
    if (!validate(payload)) {
        return {
            ...state,
            error: 'Must provide a name and date of birth'
        };
    }

    return {
        entries: [
            ...state.entries,
            {
                ...payload,
                id: new Date().getTime(),
                createdAt: new Date(),
            }
        ],
        error: null
    };
}
