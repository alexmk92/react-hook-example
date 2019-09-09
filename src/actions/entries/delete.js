export default ({ state, payload }) => {
    const newEntries = state.entries.filter(item => item.id !== payload.id);
    let newSelected = null;

    if (newEntries.length > 0) {
        newSelected = newEntries[newEntries.length-1];
    }

    return {
        ...state,
        selected: newSelected,
        entries: newEntries,
        error: null,
    };
}
