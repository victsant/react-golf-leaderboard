import { useEffect, useState } from 'react';

const useForm = (initialValues, callback, validate) => {
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        setErrors(validate(inputs));
        setSubmitForm(true);
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    const handleSelectChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitForm) {
            callback();
        }
    }, [errors]);

    return {
        handleSubmit,
        handleInputChange,
        handleSelectChange,
        inputs,
        errors,
    };
};

export default useForm;