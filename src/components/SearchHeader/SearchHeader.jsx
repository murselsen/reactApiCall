
import React from 'react';
import './SearchHeader.css';

const SearchHeader = ({ onSearch }) => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSearch(event.target.elements.search.value);
    };
    return (
        <div className='SearchHeader'>
            <form onSubmit={handleFormSubmit} className='SearchHeaderForm'>
                <label htmlFor="search">Ne Arıyorsunuz?</label>
                <input type="text" name='search' id='search' className='SearchHeaderForm__input' placeholder='Ara' />
            </form>
        </div>
    )
};

export default SearchHeader;