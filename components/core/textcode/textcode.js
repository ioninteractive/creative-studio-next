
import React from 'react';

const TextCode = ({codeString}) => ( 
<>
    <pre className="chroma">
        <code className="language-html" data-lang="html">
            {codeString}
        </code>
    </pre>
</>
)
export default TextCode; 

