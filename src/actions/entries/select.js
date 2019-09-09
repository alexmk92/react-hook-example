export default ({ state, payload }) => {
    let selected;
    if (!payload) {
        selected = state.entries[state.entries.length - 1];
    } else {
        selected = state.entries.find(item => item.id === payload.id);
    }

    return {
        ...state,
        selected,
        error: null,
    };
}
