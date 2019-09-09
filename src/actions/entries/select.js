export default ({ state, payload }) => {
    return {
        ...state,
        selected: state.entries.find(item => item.id === payload.id),
        error: null,
    };
}
