
import React from 'react';

const Select = ({options}) => (
<>    
    <select className="select-container" name="cars" id="cars">
        {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
        ))}
    </select>
</>  
)
export default Select; 

