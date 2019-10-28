import React from 'react';
import PropTypes from 'prop-types';
//Bulma
import BulmaModal from 'react-bulma-components/lib/components/modal';

const Modal = ({ toggleModal, isModalOpen, title, children }) => (
    <BulmaModal show={isModalOpen} onClose={toggleModal}>
        <BulmaModal.Card>
            <BulmaModal.Card.Head onClose={toggleModal}>
                <BulmaModal.Card.Title>
                    {title}
                </BulmaModal.Card.Title>
            </BulmaModal.Card.Head>
            {children}
        </BulmaModal.Card>
    </BulmaModal>
);

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;