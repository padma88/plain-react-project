// eslint-disable-next-line
import React, { Component } from 'react';
// import PropType from 'prop-types';

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type){
            case ('bread-bottom'):
                ingredient = <div>Bread Bottom</div>;
                break;
            case ('bread-top'):
                ingredient = <div>Bread Top
                    <div>Seed1</div>
                    <div>Seed2</div>
                </div>;
                break;
            case ('meat'):
                ingredient = <div>Meat</div>;
                break;
            case ('cheese'):
                ingredient = <div>Cheese</div>;
                break;
            case ('leaf'):
                ingredient = <div>Leaf</div>;
                break;
            default:
                ingredient = null;
                break;
        }
        return ingredient;
    }
}
// BurgerIngredients = {
//     type: PropType.string.isRequired
// }
export default BurgerIngredients;