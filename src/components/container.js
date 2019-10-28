import React, { useContext, Suspense } from 'react';
import styled from '@emotion/styled';
import { StoreContext } from '../store/provider';
//Hooks
import useModal from '../hooks/useModal';
//Bulma
import BulmaSection from 'react-bulma-components/lib/components/section';
import BulmaContainer from 'react-bulma-components/lib/components/container';
//Components
import Notification from './notification';
import Button from './button';
const PlayerForm = React.lazy(() => import('./playerForm'));
const Leaderboard = React.lazy(() => import('./Leaderboard/index'));
const Modal = React.lazy(() => import('./modal'));

const Section = styled(BulmaSection)`
    &&& {
        padding: 1rem;

        .add-player-btn {
            display: flex;
            justify-content: flex-end;
        }
    }
`;

const Container = () => {
    const { state, actions } = useContext(StoreContext);
    const { players } = state;
    const { isModalOpen, toggleModal } = useModal()

    return (
        <Section>
            <BulmaContainer>
                {!players.length ? (
                    <Notification color="danger">
                        Sorry, no players at the moment click the Add Player button below.
                </Notification>
                ) : null}
                <div className="add-player-btn">
                    <Button
                        text="Add Player"
                        clickHandler={() => toggleModal()}
                    />
                </div>
            </BulmaContainer>
            {players.length ? (
                <Suspense fallback={<span></span>}>
                    <Leaderboard
                        players={state.players}
                        remove={actions.removePlayer}
                    />
                </Suspense>
            ) : null}
            {isModalOpen ? (
                <Suspense fallback={<span></span>}>
                    <Modal
                        toggleModal={toggleModal}
                        isModalOpen={isModalOpen}
                        title="Add Player"
                    >
                        <Suspense fallback={<span></span>}>
                            <PlayerForm
                                toggleModal={toggleModal}
                                action={actions.addPlayer}
                            />
                        </Suspense>
                    </Modal>
                </Suspense>
            ) : null}
        </Section>
    )
};

export default Container;