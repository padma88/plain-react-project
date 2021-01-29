import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case 'input':
            inputElement = <input
                    {...props.elementConfig} 
                    value={props.value} onChange={props.changed}/>;
            break;
        case 'textArea':
            inputElement = <textarea
                    {...props.elementConfig} 
                    value={props.value} onChange={props.changed}/>;
            break;
        case 'select':
            inputElement = 
                <select
                        value={props.value} 
                        onChange={props.changed}>
                    {props.elementConfig.options.map(option => {
                        return <option key={option.value} value={option.value}>
                                    {option.displayValue}
                                </option>;
                    })}
                </select>;
            break;
        default:
            inputElement = null;
            break;
    }
    return (
        <div className='InputElement'>
            <label className='Label'>{props.elementConfig.label}</label>
            {inputElement}
            {!props.valid ? <span className='errorMessage'>{props.errorMessage}</span> : null}
        </div>
    )
};

export default input;