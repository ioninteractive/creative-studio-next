
import React from 'react';

const Button = ({name, type = "primary", onClick, className = ''})=> {
    const btnClassName = `btn btn-${type} ${className}`;
 
    return ( 

    <button type="button" onClick={onClick} className={btnClassName}>{name}</button>

)}
export default Button; 

