import React from 'react';

const InputLabel = ({title, type, unit, value, setValue}) => {
    return (
        <div>
            <label htmlFor={unit} className="form-label m-1">{title}</label>
            <input
                type={type}
                className="form-control"
                id={unit}
                value={value}
                onChange={setValue}
                />
        </div>
    );
};

export default InputLabel;