import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toogleTodo(state, action) {
      const toogledTodo = state.todos.find(todo => todo.id === action.payload);
      toogledTodo.completed = !toogledTodo.completed;
    },
  },
});

export const {addTodo, removeTodo, toogleTodo} = todoSlice.actions;
export default todoSlice.reducer;
