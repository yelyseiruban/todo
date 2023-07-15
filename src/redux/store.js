import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import tasksReducer from "./tasks";
import addTaskReducer from "./addTask"
export default configureStore({
    reducer: {
        tasks: tasksReducer,
        addTask: addTaskReducer
    },
    middleware: [thunkMiddleware]
})