import React from 'react';

const Email = ({title, value, setValue}) => {
    return (
        <div>
            <label htmlFor="inputEmail4" className="form-label">{title}</label>
            <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={value}
                onChange={setValue}
            />
        </div>
    );
};

export default Email;