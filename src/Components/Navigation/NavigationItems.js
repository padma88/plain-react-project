import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem pathname='/'>Burger Builder</NavigationItem>
        <NavigationItem pathname='/orders'>Orders</NavigationItem>
    </ul>
)

export default navigationItems;