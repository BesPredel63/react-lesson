import React from 'react';

const SelectFormReg = ({title, unit, defaultValue, value, onChange}) => {

    const area = [
        {id: 63, title: 'Самарская область'},
        {id: 64, title: 'Саратовская область'},
        {id: 65, title: 'Сахалинская область'},
        {id: 67, title: 'Смоленская область'},
        {id: 68, title: 'Тамбовская область'},
        {id: 69, title: 'Тверская область'},
        {id: 70, title: 'Томская область'},
    ]

    return (
        <div>
            <label htmlFor={unit} className="form-label">{title}</label>
            <select
                id={unit}
                className="form-select"
                value={value}
                onChange={onChange}
            >
                <option  disabled>{defaultValue}</option>
                {area.map(option =>
                    <option value={option.id} key={option.id}>
                        {option.title}
                    </option>
                )}
            </select>
        </div>
    );
};

export default SelectFormReg;