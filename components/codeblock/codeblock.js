import React, {useEffect, useState} from 'react';
import CheckBox from 'components/core/checkbox';
import TextArea from 'components/core/textarea';
import PubSub from './codeblock.pubsub';
import PostMessageToCreativeStudio from 'components/utils/iframe';
import CodeMirror from 'components/core/codemirror';


const CodeBlock = () => {

    const [stateLoading, setStateLoading] = useState(false);

    const [modelReact, setModelReact] = useState({
        code: '',
        includeFbml: false,
        includeSwfObject: false
      });

    const handleButtonSuccess = async () => {
        await PostMessageToCreativeStudio({type: "IFRAME_SUCCESS", payload: "sucess"})
        PostMessageToCreativeStudio({type: "CHECKBOX_CHANGED", payload: "pedro"})
    };

    const handleCode = (value) => {
        setModelReact(PrevState => ({...PrevState, code: value}));
        PostMessageToCreativeStudio({type: "HANDLE_CODE", payload: value});
    };  
    const handleIncludeFbml = (e) => {
        setModelReact(PrevState => ({...PrevState, includeFbml: e.target.checked}));
        PostMessageToCreativeStudio({type: "INCLUDE_FBML", payload: e.target.checked});
    };
    const handleIncludeSwfObject = (e) => {
        setModelReact(PrevState => ({...PrevState, includeSwfObject: e.target.checked}));
        PostMessageToCreativeStudio({type: "INCLUDE_SWFOBJECT", payload: e.target.checked});
    };

    useEffect(() => {
        window.addEventListener("message", (message) => {
            switch (message.data.type) {
              case "setValues":
                console.log('string - ' + message.data.payload);
                setModelReact(message.data.payload);
                break;
              case "setLoading":
                setStateLoading(message.data.payload);
                break;
            }
        })
    }, []);

    return ( 
        <div className="d-flex flex-column p-1 bg-primary-dark"> 
            {stateLoading && 
            <>            
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
            }
            {!stateLoading &&             
            <>
                <CodeMirror onChange={handleCode} code={modelReact.code} />
                {/* <TextArea onChange={handleCode} value={modelReact.code} className="bg-primary-dark text-white" /> */}
                <div className="d-flex flex-column">
                    <CheckBox id="includeFbml" checked={modelReact.includeFbml} 
                            onChange={handleIncludeFbml} 
                            value="includeFbml"
                            label="Automatically include support for Facebook FBML via  tag" />
                    <CheckBox id="includeSwfObject" 
                            checked={modelReact.includeSwfObject} 
                            onChange={handleIncludeSwfObject} 
                            value="includeSwfObject"
                            label="Automatically include SWFObject for hand-coded Flash support" />
                </div>
            </>}

        </div>
)};

export default CodeBlock; 