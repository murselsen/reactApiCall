
import React from 'react';
import './SearchHeader.css';

const SearchHeader = () => {

    return (
        <div className='SearchHeader'>
            <form className='SearchHeaderForm'>
                <label htmlFor="search">Ne Arıyorsunuz?</label>
                <input type="text" id='search' className='SearchHeaderForm__input' placeholder='Ara' />
            </form>
        </div>
    )
};

export default SearchHeader;