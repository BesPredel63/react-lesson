import React from 'react';
import InputLabel from "../UI/Inputs/InputLabel";
import SelectSortPost from "../UI/Selects/SelectSortPost";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className='row g-4'>
            <div className="col-md-6">
                <InputLabel
                    title='Поиск'
                    unit='SearchListPost'
                    value={filter.query}
                    setValue={event => setFilter({...filter, query: event.target.value})}
                />
            </div>
            <div className="col-md-6">
                <SelectSortPost
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue='Выберите вариант...'
                    options={[
                        {value: 'title', name: 'По заголовку'},
                        {value: 'body', name: 'По описанию'}
                    ]}
                />
            </div>
        </div>
    );
};

export default PostFilter;