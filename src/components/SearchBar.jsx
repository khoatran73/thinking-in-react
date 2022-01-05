import React from 'react';

function SearchBar({ onFilterChange, onStockChange }) {
    return (
        <div className="search-bar">
            <div className="form-group">
                <input type="text" placeholder="Search..." name="search" onChange={e => onFilterChange(e.target.value)} />
            </div>
            <div className="form-group">
                <input
                    id="checkbox"
                    type="checkbox"
                    onChange={e => onStockChange(e.target.checked)}
                />
                <label htmlFor="checkbox">Only show products in stock</label>
            </div>
        </div>
    )
}

export default SearchBar