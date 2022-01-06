import React from 'react';
import ProductTable from "./components/ProductTable"
import SearchBar from "./components/SearchBar"
import products from "./products"
import { useState } from 'react'
import "./index.css"


function App() {
    const [filter, setFilter] = useState("")
    const [isStockOnly, setIsStockOnly] = useState(false)

    const handleFilterChange = filterText => {
        setFilter(filterText)
    }

    const handleStockChange = isStockOnly => {
        setIsStockOnly(isStockOnly)
    }

    return (
        <div className="wrapper">
            <SearchBar
                onFilterChange={handleFilterChange}
                onStockChange={handleStockChange}
            />
            <ProductTable
                products={products}
                filter={filter}
                isStockOnly={isStockOnly}
            />
        </div>
    )
}

export default App