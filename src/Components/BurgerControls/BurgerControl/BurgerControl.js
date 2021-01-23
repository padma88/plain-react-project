import React from 'react';
import './BurgerControl.css';

const burgerControl = (props) => {
    const isDisabled = props.minPrice >= props.price;
    let orderBtnClassName = ['orderBtn']
    if (!isDisabled) {
        orderBtnClassName.push('orderBtnAnimation')
    }
    const ingredients = Object.keys(props.ingredients);
    const controls = 
        <div className='controlBox'>
            <div className='price'>Current Price : ${props.price}</div>
            {
                ingredients.map(ingKey => {
                    const isDisabled = props.ingredients[ingKey] === 0;
                    return <div className='control' 
                        key={ingKey} type={ingKey}>
                        <div className='label'>{ingKey}</div>
                        <div>
                            <button 
                                className='addIngredient' 
                                onClick={() => props.ingredientAdded(ingKey)}> More 
                            </button>
                            <button 
                                className='removeIngredient' 
                                onClick={() => props.ingredientRemoved(ingKey)}
                                disabled={isDisabled}> Less
                            </button>
                        </div>
                    </div>
                })
            }
            <div className='control'>
                <button onClick={props.checkout}
                    className={orderBtnClassName.join(' ')} 
                    disabled={isDisabled}>Check out</button>
            </div>
        </div>
    return controls;
}

export default burgerControl;