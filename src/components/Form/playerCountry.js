import { countries } from "country-flags-svg";
import PropTypes from 'prop-types';
import React from 'react';
//Bulma
import { Field, Control, Label, Select, Help, } from 'react-bulma-components/lib/components/form';


const PlayerCountry = ({ label, name, value, onChange, errors }) => (
    <Field>
        <Label>{label}</Label>
        <Control>
            <Select color={errors ? 'danger' : null} onChange={onChange} name={name} value={value}>
                <option value="">Select Country</option>
                {countries.map((country, idx) => (
                    <option key={idx.toString()} value={country.name}>{country.name}</option>
                ))}
            </Select>
            {errors ? (
                <Help color="danger">{errors}</Help>
            ) : null}
        </Control>
    </Field>
);

PlayerCountry.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.shape({})
};

export default PlayerCountry;
