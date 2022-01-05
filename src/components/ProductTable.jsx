import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filter, isStockOnly }) {
    const rows = []
    let lastCategory = null

    products.forEach((product, index) => {
        if (!product.name.includes(filter)) {
            return
        }

        if (!product.stocked && isStockOnly) {
            return
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    key={product.category}
                    category={product.category}
                />);
            lastCategory = product.category
        }
        rows.push(
            <ProductRow
                key={index}
                name={product.name}
                stocked={product.stocked}
                price={product.price}
            />
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default ProductTable