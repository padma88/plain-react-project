import React from 'react';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Button from '../UI/Button/Button';
import './OrderSummary.css';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
    const list = ingredients.map((ingKey) => {
        let count = props.ingredients[ingKey];
        return count !== 0 ? <li key={ingKey} className='li'>{ingKey} - {count}</li> : null
    })
    return (
        <Auxilary>
            <div className='summaryContainer'>
                <div><strong>Your Order</strong></div>
                <div> A delicius burger with the following ingredients...</div>
                <ul>
                    {list}
                </ul>
                <div>Continue to checkout?</div>
                <div><strong>Total Price: {props.price}</strong></div>
            </div>
            <div className='buttonPosition'>
                <Button clicked={props.continue} btnType='Success'>CONTINUE</Button>
                <Button clicked={props.cancel} btnType='Cancel'>CANCEL</Button>
            </div>
        </Auxilary>
    );
}

export default orderSummary;