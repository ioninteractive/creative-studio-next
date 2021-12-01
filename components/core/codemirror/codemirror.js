
import React from 'react';
import {UnControlled as ReactCodeMirror} from 'react-codemirror2'
import 'node_modules/codemirror/lib/codemirror.css';
import 'node_modules/codemirror/theme/material.css';


const CodeMirror = ({code, onChange})=>( 
<>
    <ReactCodeMirror
        value={code}
        options={{
            lineNumbers: true,
            lineWrapping: true,
            gutters: ['CodeMirror-scroll, CodeMirror-linenumber'],
            mode: 'htmlmixed',
            theme: 'ixperience',
            showCursorWhenSelecting: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            styleActiveLine: true,
            autoScroll: true
        }}
    onChange={(editor, data, value) => { 
        onChange(value)
     }}
    />
</>
)
export default CodeMirror; 

