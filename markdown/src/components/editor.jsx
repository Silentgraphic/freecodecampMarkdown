import { useDispatch } from "react-redux";
import { updateMarkdown } from "../slices/markdown";

function Editor() {
    const dispatch = useDispatch();

    return (
        <textarea id="editor" onChange={(event) => dispatch(updateMarkdown(event.target.value))}></textarea>
    );
}

export default Editor;