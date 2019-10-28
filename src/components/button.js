import React from 'react';
import PropTypes from 'prop-types';
//Bulma
import BulmaButton from 'react-bulma-components/lib/components/button';

const Button = ({ type, text, clickHandler, }) => {
    return (
        <BulmaButton
            color={type}
            onClick={clickHandler}
        >
            {text}
        </BulmaButton>
    )
};

Button.defaultProps = {
    type: 'primary',
};

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func,
};

export default Button;