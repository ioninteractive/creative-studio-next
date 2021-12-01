import { useState } from 'react';

const PubSub = () => {
    const [modelReact, setModelReact] = useState({
      code: '',
      includeFbml: false,
      includeSwfObject: false
    });
    
    return {modelReact, setModelReact}
}

export default PubSub;