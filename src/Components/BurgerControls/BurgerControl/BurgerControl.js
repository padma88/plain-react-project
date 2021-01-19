import React from 'react';
import './BurgerControl.css';

const burgerControl = (props) => {
    const isDisabled = props.minPrice >= props.price;
    let orderBtnClassName = ['orderBtn']
    if (!isDisabled) {
        orderBtnClassName.push('orderBtnAnimation')
    }
    const controls = 
        <div className='controlBox'>
            <div className='price'>Current Price : ${props.price}</div>
            {
                props.controls.map(control => {
                    const isDisabled = props.ingredients[control.type] === 0;
                    return <div className='control' 
                        key={control.type} type={control.type}>
                        <div className='label'>{control.label}</div>
                        <div>
                            <button 
                                className='addIngredient' 
                                onClick={() => props.ingredientAdded(control.type)}> More 
                            </button>
                            <button 
                                className='removeIngredient' 
                                onClick={() => props.ingredientRemoved(control.type)}
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