import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems'
import ToggleDrawer from '../ToggleDrawer/ToggleDrawer';
import './ToolBar.css';

const toolBar = (props) => (
    <header className='ToolBar'>
        <ToggleDrawer clicked={props.showSideDrawer}/>
        <Logo/>
        <nav className='desktopOnly'>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
)

export default toolBar;
