import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}) {
    return (
    <button type="button" className='CreateTodoButton' onClick={() => {
      setOpenModal(state=>!state);
      console.log("apretaste el button >:-(")
    }}>+</button>
    );
  }

export { CreateTodoButton };