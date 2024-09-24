import { marked } from 'marked';

function Preview() {
    let test = marked.parse("# Marked in Node.js\n\nRendered by **marked**.");

    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: test }}></div >
    );
}

export default Preview;