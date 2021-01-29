import React from 'react';
import './Order.css';

const order = (props) => {
    const ingredients = props.order.ingredients;
    let displayIngredients = null;
    if (ingredients) {
        displayIngredients = 
            <div className='Ingredients'><strong> Ingredients: </strong>&nbsp;
                {
                    Object.keys(ingredients).map(key => {
                        return ingredients[key] ? <span key={key}>
                                    {key} ({ingredients[key]})
                                    &nbsp;
                                </span> : null;
                    })
                }
            </div>;
    }
    return (
        <section className='OrderSection'>
            {displayIngredients}
            <div>
                <strong>Price - USD {props.order.price}</strong>
            </div>
        </section>
    );
}

export default order;