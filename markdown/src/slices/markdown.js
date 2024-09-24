import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    markdown: ""
};

export const markdown = createSlice({
    name: "markdown",
    initialState,
    reducers: {
        test: state => {
            state.markdown = "Hello World";
        }
    }
});

export default markdown.reducer;