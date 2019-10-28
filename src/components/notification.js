import React from 'react';
import PropTypes from 'prop-types';
import BulmaNotification from 'react-bulma-components/lib/components/notification';

const Notification = ({ color, children }) => {
    return (
        <BulmaNotification color={color}>
            {children}
        </BulmaNotification>
    );
};

Notification.defaultProps = {
    color: 'success'
};

Notification.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Notification;