import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    markdown: ""
};

export const markdownSlice = createSlice({
    name: "markdown",
    initialState,
    reducers: {
        updateMarkdown: (state, action) => {
            state.markdown = `<p>${action.payload}</p>`;
        }
    }
});

export const { updateMarkdown } = markdownSlice.actions;

export default markdownSlice.reducer;