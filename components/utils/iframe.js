const PostMessageToCreativeStudio = ({type, payload}) => {
    window.parent.postMessage(JSON.parse(JSON.stringify({ type , payload })), "*"); 
} 
export default PostMessageToCreativeStudio;