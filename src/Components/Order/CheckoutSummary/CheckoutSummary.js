import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>We hope it tastes well</h1>
            <div>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div className='ButtonDiv'>
                <Button btnType='Success' clicked={props.checkoutContiued}>Continue</Button>
                <Button btnType='danger' clicked={props.checkoutCancelled}>Cancel</Button>
            </div>
        </div>
    )
};

export default checkoutSummary;