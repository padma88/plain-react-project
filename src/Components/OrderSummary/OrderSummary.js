import React from 'react';
import './OrderSummary.css';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
    const list = ingredients.map((ingKey) => {
        let count = props.ingredients[ingKey];
        return count !== 0 ? <li key={ingKey} className='li'>{ingKey} - {count}</li> : null
    })
    return (
        <div>
            <strong>Your Order</strong>
            <div> A delicius burger with the following ingredients...</div>
            <ul>
                {list}
            </ul>
            <div>Continue to checkout?</div>
        </div>
    );
}

export default orderSummary;