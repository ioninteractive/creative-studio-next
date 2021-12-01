
import React from 'react';

const InputFile = ({labelButton, showButton, idButton, idInput}) => (
<>    
    <div className="input-group mb-3">
        { showButton && <button className="btn btn-outline-secondary" type="button" id={idButton}>{labelButton}</button>}
        <input type="file" className="form-control" id={idInput} aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
    </div>
</>  
)
export default InputFile; 

