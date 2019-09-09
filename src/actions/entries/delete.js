export default ({ state, payload }) => {
    const newEntries = state.entries.filter(item => item.id !== payload.id);

    return {
        selected: newEntries[newEntries.length-1],
        entries: newEntries,
        error: null,
    };
}
