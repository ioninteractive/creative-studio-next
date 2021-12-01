
import React from 'react';

const TextArea = ({id, rows, className, value, onChange})=>( 
<>

    <textarea className={className} id={id} onChange={onChange} rows={rows} value={value} />
    
</>
)
export default TextArea; 

