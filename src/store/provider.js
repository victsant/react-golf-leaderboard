import React, { createContext, useEffect } from 'react';
import reducer from './reducer';
import { useActions } from './actions';
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const initialState = {
        players: [],
    };
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);
    const value = { state, dispatch, actions };

    useEffect(() => {
        if (state.players.length) {
            actions.sortPlayers();
        }
    }, [state.players])

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
};

export {
    StoreContext,
    StoreProvider,
};
