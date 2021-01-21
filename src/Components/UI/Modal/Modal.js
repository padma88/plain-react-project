import React from 'react';
import Auxilary from '../../../hoc/Auxilary';
import BackDrop from '../BackDrop/BackDrop';
import './Modal.css'
const modal = (props) => {
    const style = {
        transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    };
    return <Auxilary>
                <BackDrop show={props.show} clicked={props.modalClosed}></BackDrop>
                <div className='modal'
                    style={style}>
                    {props.children}
                </div>
            </Auxilary>
};

export default modal;