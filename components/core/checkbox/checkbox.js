
import React from 'react';
import Label  from 'components/core/label';


const CheckBox = ({id, label, onChange, checked, value}) => ( 
<div className="form-check">
    <input value={value} className="form-check-input pr-1" onChange={onChange} type="checkbox" checked={checked} id={id} />
    <Label value={label} className="form-check-label text-white" htmlFor={id}  />
</div>
)
export default CheckBox; 

