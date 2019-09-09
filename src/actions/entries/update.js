import validate from "./validate";

export default ({ state, payload }) => {
    if (!validate(payload)) {
        return {
            ...state,
            error: 'Must provide a name and date of birth'
        };
    }

    const existing = state.entries.find(item => item.id === payload.id);
    if (existing) {
        return {
            entries: [
                ...state.entries.filter(item => item.id !== payload.id),
                {
                    ...existing,
                    ...payload
                }
            ],
            error: null,
            selected: existing
        }
    }

    return state;
}
