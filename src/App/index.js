import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

function App() {
  const { 
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);  
  const [ searchValue, setsearchValue] = React.useState("");
  const totalTodos = todos.length;

  const completedTodos = todos.filter( 
    todo => !!todo.completed
  ).length;  
  
  const searchedTodos = todos.filter( 
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
  });    

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
  <AppUI
    // loading={loading}
    // error={error}
    // completedTodos={completedTodos}
    // totalTodos={totalTodos}
    // searchValue={searchValue}
    // setsearchValue={setsearchValue}
    // searchedTodos={searchedTodos}
    // completeTodo={completeTodo}
    // deleteTodo={deleteTodo}
  />
);
};

export default App;

// // const defaultTodos = [ 
// //   { text:"Hola", completed:false }, 
// //   { text:"Hola Dani", completed:true },
// //   { text:"Estamos aprendiendo React", completed:false },
// //   { text:"triste", completed:true } 
// // ]