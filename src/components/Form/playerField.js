import React from 'react';
import PropTypes from 'prop-types';
//Bulma
import { Field, Control, Label, Input, Help } from 'react-bulma-components/lib/components/form';


const PlayerField = ({ label, type, name, placeholder, value, onChange, errors }) => (
    <Field>
        <Label>{label}</Label>
        <Control>
            <Input color={errors ? 'danger' : null} onChange={onChange} name={name} type={type} placeholder={placeholder ? placeholder : label} value={value} required />
        </Control>
        {errors ? (
            <Help color="danger">{errors}</Help>
        ) : null}
    </Field>
);

PlayerField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.shape({}),
};

export default PlayerField;