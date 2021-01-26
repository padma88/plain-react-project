import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavigationItem.css';

const navigationItem = (props) => (
    <li className='NavigationItem'>
        <NavLink to={{
                pathname: props.pathname
            }}
            exact
            className={props.active ? 'active' : null} >
            {props.children}
        </NavLink>
    </li>
)

export default navigationItem;