import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoInitialState, TodoType } from '../types/Types'


const initialState: TodoInitialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload];
        },
        removeTodo: (state: TodoInitialState, action: PayloadAction<number>)=>{
            state.todos = [...state.todos.filter((todo:TodoType)=> todo.id != action.payload)]
        },
        editTodo: (state: TodoInitialState, action: PayloadAction<TodoType>)=>{
            const todoUpdate = state.todos.find((todo:TodoType)=> todo.id == action.payload.id);
            if(todoUpdate){
                todoUpdate.content = action.payload.content
            }
        }
    },
})

export const { createTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer