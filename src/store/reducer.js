export default (state, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [...state.players, action.payload]
            };
        case 'REMOVE_PLAYER':
            return {
                ...state,
                players: action.payload
            };
        case 'SORT':
            return {
                ...state,
                players: action.payload
            };
        default:
            return {
                ...state,
            }
    }
};