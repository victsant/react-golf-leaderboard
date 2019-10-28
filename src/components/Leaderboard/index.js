import React from 'react';
import PropTypes from 'prop-types';
//Bulma
import BulmaTable from 'react-bulma-components/lib/components/table';
import BulmaContainer from 'react-bulma-components/lib/components/container';
//Components
import TableRow from './row';


const Leaderboard = ({ players, remove }) => (
    <BulmaContainer>
        <BulmaTable>
            <thead>
                <tr>
                    <th>Pos.</th>
                    <th className="hide-mobile">Country</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, idx) => (
                    <TableRow
                        key={player.uid}
                        player={player}
                        idx={idx + 1}
                        remove={remove}
                    />
                ))}
            </tbody>
        </BulmaTable>
    </BulmaContainer>
);

Leaderboard.propTypes = {
    players: PropTypes.shape({}).isRequired,
    remove: PropTypes.func.isRequired,
};

export default Leaderboard;