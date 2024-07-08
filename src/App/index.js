import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodosContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export default App;

// // const defaultTodos = [ 
// //   { text:"Hola", completed:false }, 
// //   { text:"Hola Dani", completed:true },
// //   { text:"Estamos aprendiendo React", completed:false },
// //   { text:"triste", completed:true } 
// // ]