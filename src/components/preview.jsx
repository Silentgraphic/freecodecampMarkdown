import { useSelector } from 'react-redux';

function Preview() {
    let test = useSelector(state => state.markdown.markdown);

    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: test }}></div >
    );
}

export default Preview;