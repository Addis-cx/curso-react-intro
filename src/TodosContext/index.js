import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const [ searchValue, setsearchValue] = React.useState("");
    const [ openModal, setOpenModal] = React.useState(false);

    const { 
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);  
    
    const totalTodos = todos.length;
    
    const completedTodos = todos.filter( 
          todo => !!todo.completed
     ).length;  
        
     const searchedTodos = todos.filter( 
    todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
     });

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos);
    };
    
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };
    
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
            );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            openModal,
            setOpenModal,
            completedTodos,
            totalTodos,
            searchValue,
            setsearchValue,
            loading,
            error,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
        }}>
            { children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };