import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import '../../../styles/App.css'

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <button
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'btn btn-outline-dark page' : 'btn btn-outline-dark'}
                >
                    {p}
                </button>
            )}
        </div>
    );
};

export default Pagination;