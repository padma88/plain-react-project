import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems';
import BackDrop from '../../Components/UI/BackDrop/BackDrop';
import './SideDrawer.css';
import Auxilary from '../../hoc/Auxilary/Auxilary';

const sideDrawer = (props) => (
    <Auxilary>
        <BackDrop show={props.open} clicked={props.close}></BackDrop>
        <div className={['SideDrawer', props.open ? 'Open' : 'Close'].join(' ')}>
            <div className='logoContainer'>
                <Logo/>
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
    </Auxilary>
)

export default sideDrawer;