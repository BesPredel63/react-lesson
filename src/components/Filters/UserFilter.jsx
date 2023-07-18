import React from 'react';
import InputLabel from "../UI/Inputs/InputLabel";
import SelectSortUser from "../UI/Selects/SelectSortUser";

const UserFilter = ({filter, setFilter}) => {
    return (
        <div>
            <hr />
            <h3>Фильтр</h3>
            <div className="row g-3">
                <div className="col-md-4">
                    <SelectSortUser
                        value={filter.sort}
                        onChange={sortUsers => setFilter({...filter, sort: sortUsers})}
                        defaultValue='Сортировка'
                        options = {[
                            {value: 'firstName', name: 'По имени'},
                            {value: 'secondName', name: 'По фамилии'},
                            {value: 'birthDay', name: 'По дате'},
                        ]}
                    />
                </div>
                <div className='col-md-8'>
                    <InputLabel
                        title='Поиск...'
                        unit='SearchToFirstName'
                        value={filter.query}
                        setValue={event => setFilter({...filter, query: event.target.value})}
                    />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default UserFilter;