import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import './Burger.css';

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(ingrKey => {
        return [...Array(props.ingredients[ingrKey])].map((_, i) => (
            <BurgerIngredients key={ingrKey + i} type={ingrKey}></BurgerIngredients>
        ))
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (ingredients.length === 0 ) {
        ingredients = <p className='emptyMessage'>
                        <strong>Please start adding ingredients</strong>
                     </p>;
    }
    return (
        <div className='burger'>
            <div className='burgerContainer'>
                <BurgerIngredients key='bread-top' type='bread-top'></BurgerIngredients>
                {ingredients}
                <BurgerIngredients key='bread-bottom' type='bread-bottom'></BurgerIngredients>
            </div>
        </div>);
}

export default burger;