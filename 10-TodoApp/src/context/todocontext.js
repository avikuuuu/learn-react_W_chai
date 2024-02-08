/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: "1",
      todo: "todo msg",
      completed: false,
    },
  ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export function UseTodo() {
  return useContext(TodoContext);
}
