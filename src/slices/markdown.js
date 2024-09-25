import { createSlice } from "@reduxjs/toolkit";
import { marked } from 'marked';
import md from "../assets/markdownPreview.md?raw";

marked.use({
    gfm: true,
    breaks: true
});

const initialState = {
    markdown: marked.parse(md)
};

export const markdownSlice = createSlice({
    name: "markdown",
    initialState,
    reducers: {
        updateMarkdown: (state, action) => {
            state.markdown = `${marked.parse(action.payload)}`;
        }
    }
});

export const { updateMarkdown } = markdownSlice.actions;

export default markdownSlice.reducer;