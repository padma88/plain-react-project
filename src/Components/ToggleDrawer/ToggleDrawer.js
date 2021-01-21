import React from 'react';
import './ToggleDrawer.css';

const toggleDrawer = (props) => (
    <div className='toggleDrawer' onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default toggleDrawer;