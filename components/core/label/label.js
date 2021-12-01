
import React from 'react';

const Label = ({value, id, className, htmlFor})=>( 
<>

    <label className={className} id={id} htmlFor={htmlFor}>{value}</label>

</>
)
export default Label; 

