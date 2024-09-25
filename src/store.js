import { configureStore } from "@reduxjs/toolkit";
import markdownReducer from "./slices/markdown";

export default configureStore({
    reducer: {
        markdown: markdownReducer
    }
});