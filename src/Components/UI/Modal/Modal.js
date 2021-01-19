import React from 'react';
import Auxilary from '../../../hoc/Auxilary';
import './Modal.css'
const modal = (props) => {
    const style = {
        transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    };
    return <Auxilary>
                <div className='modal'
                    style={style}>
                    {props.children}
                    <button className='continueBtn' onClick={props.continue}>Continue</button>
                    <button className='cancelBtn' onClick={props.cancel}>Cancel</button>
                </div>
            </Auxilary>
};

export default modal;