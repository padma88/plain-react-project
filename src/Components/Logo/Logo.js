import React from 'react';
import LOGO from '../../assets/burger-logo.png';
import './Logo.css';

const logo = (props) => (
    <div className='Logo'>
        <img src={LOGO} alt='Mylogo' />
    </div>
)

export default logo;