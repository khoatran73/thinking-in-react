import React from 'react';

function ProductRow(props) {
    return (
        <tr>
            {
                !props.stocked
                    ? <td style={{ color: "red" }}>{props.name}</td>
                    : <td>{props.name}</td>
            }
            {
                !props.stocked
                    ? <td style={{ color: "red" }}>{props.price}</td>
                    : <td>{props.price}</td>
            }
            
        </tr>
    )
}

export default ProductRow