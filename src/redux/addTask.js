import {createSlice} from "@reduxjs/toolkit";



export const addTaskSlice = createSlice({
    name: 'tasks',
    initialState: {
        text: ""
    },

    reducers: {
        changeTaskText: (state , action) => {
            state.text = action.payload;
            console.log(state.text);
        }
    }
})

export const { changeTaskText } = addTaskSlice.actions;
export default addTaskSlice.reducer;