import validate from "./validate";

export default ({ state, payload }) => {
    if (!validate(payload)) {
        return {
            ...state,
            error: 'Must provide a name and date of birth'
        };
    }

    const nextEntry = {
        ...payload,
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
}
