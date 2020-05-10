import React from 'react';

const PasswordForgetForm = (props) => {
    
    const isInvalid = props.email === '';

    return (
        <form onSubmit={event => props.onSubmit(event)}>
            <button disabled={isInvalid} type="submit">
                RESET PASSWORD
            </button>
        </form>
    );
};

export default PasswordForgetForm;