export default function validate(values) {
    let errors = {};
    const stringRegex = (/^[A-Za-z]+$/);

    if (!values.firstName) {
        errors.firstName = 'First Name field is required.';
    } else if (!stringRegex.test(values.firstName)) {
        errors.firstName = 'First Name field is invalid. It can only have letters.'
    }

    if (!values.lastName) {
        errors.lastName = 'Last Name field is required.';
    } else if (!stringRegex.test(values.lastName)) {
        errors.lastName = 'Last Name field is invalid. It can only have letters.'
    }

    if (!values.country) {
        errors.country = 'Country field is required.';
    }
    let score = parseInt(values.score);
    if (!values.score) {
        errors.score = 'Score field is required.';
    } else if (!(/^[0-9\b]+$/).test(score) || !(score >= 0 && score <= 100)) {
        errors.score = 'Score can only be a number between 0 and 100.';
    }
    return errors;
};