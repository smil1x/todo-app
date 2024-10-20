import { combineReducers } from '@reduxjs/toolkit';
import todoSlice from "./slices/todo/todoSlice.ts";


const rootReducer = combineReducers({
    todo: todoSlice,
});

export default rootReducer;