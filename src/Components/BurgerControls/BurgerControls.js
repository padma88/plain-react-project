import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    {type:'meat', label: 'Meat'},
    {type:'cheese', label: 'Cheese'},
    {type:'leaf', label: 'Leaf'},
    {type:'salad', label: 'Salad'},
    {type:'bacon', label: 'Bacon'}
];

const burgerControls = (props) => {
    return <BurgerControl
                ingredients={props.ingredients} 
                price={props.price}
                controls={controls} 
                ingredientAdded={props.ingredientAdded} 
                ingredientRemoved={props.ingredientRemoved}
                minPrice={props.minPrice}
                checkout={props.checkout}>
            </BurgerControl>
}

export default burgerControls;