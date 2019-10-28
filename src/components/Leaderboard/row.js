import React from 'react';
import PropTypes from 'prop-types';
import { findFlagUrlByCountryName } from "country-flags-svg";
import Button from '../button';


const TableRow = ({ player, idx, remove }) => {
    const flagUrl = findFlagUrlByCountryName(player.country);
    return (
        <tr>
            <th>{idx}.</th>
            <td className="hide-mobile">
                <img src={flagUrl} alt={player.country} />
            </td>
            <td>{player.lastName}, {player.firstName}</td>
            <td>{player.score}</td>
            <td>
                <Button
                    text="Delete"
                    type="danger"
                    clickHandler={() => remove(player.uid)}
                />
            </td>
        </tr>
    );
};

TableRow.propTypes = {
    player: PropTypes.shape({}).isRequired,
    idx: PropTypes.number.isRequired,
    remove: PropTypes.func.isRequired,
};

export default TableRow;