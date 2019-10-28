import { uid } from 'react-uid';

export const useActions = (state, dispatch) => {
    /*
        Add Player
    */
    function addPlayer(data) {
        const finalData = {
            ...data,
            uid: uid(data)
        };
        dispatch({ type: 'ADD_PLAYER', payload: finalData });
    }
    /*
        Remove Player
    */
    function removePlayer(id) {
        const players = state.players.filter(player => player.uid !== id);
        dispatch({ type: 'REMOVE_PLAYER', payload: players });
    }
    /*
       Sort Players
   */
    function sortPlayers() {
        const players = state.players.sort((a, b) => {
            //Sort by Score
            if (a.score < b.score) return -1;
            if (a.score > b.score) return 1;
            //Sort by LastName
            if (a.lastName > b.lastName) return 1;
            if (a.lastName < b.lastName) return -1;
        });
        dispatch({ type: 'SORT', payload: players });
    }

    return {
        addPlayer,
        removePlayer,
        sortPlayers,
    };
};