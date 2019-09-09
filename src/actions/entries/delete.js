export default ({ state, payload }) => ({
    ...state,
    entries: state.entries.filter(item => item.id !== payload.id),
    error: null
});
