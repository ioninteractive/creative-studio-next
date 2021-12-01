
import React from 'react';

const Select = ({tabNumber}) => (
<>    
    <ul classNameName="nav nav-pills">
        <li className="nav-item">
            <a className="nav-link" href="#" aria-current="page">Tab 1</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#" aria-current="page">Tab 2</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#" aria-disabled="true">Tab 3</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#" aria-current="page">Tab 4</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#" aria-current="page">Tab 5</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#" aria-disabled="true">Tab 6</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#" aria-disabled="true">Tab 7</a>
        </li>
    </ul>
</>  
)
export default Select; 

