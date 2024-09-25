import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

function Preview() {
    let test = useSelector(state => state.markdown.markdown);

    useEffect(() => {
        const nodes = document.querySelectorAll('code');
        nodes.forEach(node => hljs.highlightBlock(node));
    });

    if (test === "") {
        return (
            <div id="preview"><h1 id="placeHolder">Your markdown will be shown here</h1></div >
        );
    } else {
        return (
            <div id="preview" dangerouslySetInnerHTML={{ __html: test }}></div >
        );
    }
}

export default Preview;