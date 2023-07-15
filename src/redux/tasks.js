import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {Tasks} from "../DataObjects/Tasks";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    try {
        const response = await axios.get('http://localhost:8080/tasks');
        new Tasks().setTasksObjects(response.data)
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch tasks');
    }
});


export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        data: []
    },

    reducers: {
        addTask: (state, action) => {

        },
        checkTask: (state, action) => {
            axios.patch(`http://localhost:8080/task/${action.payload}`, {

            })
                .then(response => console.log(response.data))
                .catch(error => console.error(error))
        },
        removeTask: (state, action) => {
            axios.delete(`http://localhost:8080/task/${action.payload}`, {

            })
                .then(response => console.log(response.data))
                .catch(error => console.error(error))
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.data = action.payload;
    });
}
})

export const { addTask, checkTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;