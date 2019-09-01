import React from 'react';
import css from './InputValue.module.css';

const InputValue = props => {
    debugger
    let errorColor = props.errorColor === true? `${css.backgroundError}`:``;
    return (
        <>
            <input type={`number`} value={props.value} className={`${css.inputValue} ${errorColor}`}
                   onChange={(e) => props.onChangeInput(e.currentTarget.value)}/>
        </>
    );
};

export default InputValue;