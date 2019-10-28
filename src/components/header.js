import React from 'react';
//Bulma
import BulmaNavbar from 'react-bulma-components/lib/components/navbar';
//Images
import PGALogo from '../images/pga_logo.png';

const Header = () => (
    <BulmaNavbar>
        <BulmaNavbar.Brand>
            <img src={PGALogo} alt="PGA Leaderboard" />
        </BulmaNavbar.Brand>
    </BulmaNavbar>
);

export default Header;