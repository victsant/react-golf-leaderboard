import React, { Suspense } from 'react';
//Hooks
import useForm from '../hooks/useForm';
//Bulma
import BulmaColumns from 'react-bulma-components/lib/components/columns';
import BulmaModal from 'react-bulma-components/lib/components/modal';
//Components
import Button from './button';
const PlayerField = React.lazy(() => import('./Form/playerField'));
const PlayerCountry = React.lazy(() => import('./Form/playerCountry'));
import validate from '../utils/validationRules';


const PlayerForm = ({ toggleModal, action }) => {
    const playerDetails = () => {
        action(inputs);
        toggleModal();
    };
    const { errors, inputs, handleInputChange, handleSelectChange, handleSubmit } = useForm({
        firstName: '',
        lastName: '',
        score: '',
        country: '',
    }, playerDetails, validate);
    return (
        <>
            <BulmaModal.Card.Body>
                <form>
                    <BulmaColumns>
                        <BulmaColumns.Column>
                            <Suspense fallback={<span></span>}>
                                <PlayerField
                                    label="First Name"
                                    type="text"
                                    name="firstName"
                                    value={inputs.firstName}
                                    onChange={handleInputChange}
                                    errors={errors.firstName}
                                />
                            </Suspense>
                        </BulmaColumns.Column>
                        <BulmaColumns.Column>
                            <Suspense fallback={<span></span>}>
                                <PlayerField
                                    label="Last Name"
                                    type="text"
                                    name="lastName"
                                    value={inputs.lastName}
                                    onChange={handleInputChange}
                                    errors={errors.lastName}
                                />
                            </Suspense>
                        </BulmaColumns.Column>
                    </BulmaColumns>
                    <BulmaColumns>
                        <BulmaColumns.Column>
                            <Suspense fallback={<span></span>}>
                                <PlayerField
                                    label="Score"
                                    type="text"
                                    name="score"
                                    value={inputs.score}
                                    onChange={handleInputChange}
                                    errors={errors.score}
                                />
                            </Suspense>
                        </BulmaColumns.Column>
                        <BulmaColumns.Column>
                            <Suspense fallback={<span></span>}>
                                <PlayerCountry
                                    label="Country"
                                    name="country"
                                    value={inputs.country}
                                    onChange={handleSelectChange}
                                    errors={errors.country}
                                />
                            </Suspense>
                        </BulmaColumns.Column>
                    </BulmaColumns>
                </form>
            </BulmaModal.Card.Body>
            <BulmaModal.Card.Foot>
                <Button
                    text="Submit"
                    clickHandler={handleSubmit}
                />
                <Button
                    text="Cancel"
                    type="danger"
                    clickHandler={toggleModal}
                />
            </BulmaModal.Card.Foot>
        </>
    );
};

export default PlayerForm;