// eslint-disable-next-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredients.css';

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type){
            case ('bread-bottom'):
                ingredient = <div className='ingredient breadBottom'></div>;
                break;
            case ('bread-top'):
                ingredient = <div className='ingredient breadTop'>
                    <div className='seed_1'></div>
                    <div className='seed_2'></div>
                </div>;
                break;
            case ('meat'):
                ingredient = <div className='ingredient meat'></div>;
                break;
            case ('bacon'):
                ingredient = <div className='ingredient bacon'></div>;
                break;
            case ('salad'):
                ingredient = <div className='ingredient salad'></div>;
                break;
            case ('cheese'):
                ingredient = <div className='ingredient cheese'></div>;
                break;
            case ('leaf'):
                ingredient = <div className='ingredient leaf'></div>;
                break;
            default:
                ingredient = null;
                break;
        }
        return ingredient;
    }
}
BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}
export default BurgerIngredients;