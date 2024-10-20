import { v4 as uuid } from 'uuid';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITask, ITaskFilters, ITodo} from "./type.ts";

const initialState: ITodo = {
    tasks: [],
    filters: {
        status: 'all',
        sortBy: 'none',
    },
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            state.tasks.push({
                id: uuid(),
                name: action.payload,
                completed: false
            });
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task: ITask) => action.payload !== task.id);
        },
        changeTaskStatus: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        updateFilters: (state, action: PayloadAction<ITaskFilters>) => {
            state.filters = action.payload;
        }
    },
});


export const {
    addTask,
    removeTask,
    changeTaskStatus,
    updateFilters
} = todoSlice.actions;

export default todoSlice.reducer;