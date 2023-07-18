import React from 'react';

const Password = ({title, value, setValue}) => {
    return (
        <div>
            <label htmlFor="inputPassword4" className="form-label">{title}</label>
            <input
                type='password'
                className="form-control"
                id="inputPassword4"
                value={value}
                onChange={setValue}
            />
        </div>
    );
};

export default Password;