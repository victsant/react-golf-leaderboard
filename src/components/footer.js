import React from 'react';
//Bulma
import BulmaContent from 'react-bulma-components/lib/components/content';
import BulmaContainer from 'react-bulma-components/lib/components/container';
import BulmaFooter from 'react-bulma-components/lib/components/footer';

const Footer = () => (
    <BulmaFooter>
        <BulmaContainer>
            <BulmaContent className="centered">
                <>
                    <p>
                        React Golf Leaderboard built using <strong>React and Bulma</strong>.
                    </p>
                    <p>
                        &copy;{(new Date().getFullYear())}&nbsp;Victor Santana
                    </p>
                </>
            </BulmaContent>
        </BulmaContainer>
    </BulmaFooter>
)

export default Footer;