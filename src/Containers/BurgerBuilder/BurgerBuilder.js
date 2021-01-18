import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary';
import BurgerIngredients from '../../Components/Burger/BurgerIngredients/BurgerIngredients'

class BurgerBuilder extends Component {
    render () {
        let type = 'bread-bottom';
        return (
            <Auxilary>
                <div>Burger</div>
                <BurgerIngredients type={type}></BurgerIngredients>
            </Auxilary>
        );
    }
}

export default BurgerBuilder;