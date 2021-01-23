import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';

const burgerControls = (props) => {
    return <BurgerControl
                ingredients={props.ingredients} 
                price={props.price}
                ingredientAdded={props.ingredientAdded} 
                ingredientRemoved={props.ingredientRemoved}
                minPrice={props.minPrice}
                checkout={props.checkout}>
            </BurgerControl>
}

export default burgerControls;