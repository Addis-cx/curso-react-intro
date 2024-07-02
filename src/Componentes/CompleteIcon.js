import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({ completed, onComplete }) {
    return <TodoIcon 
        type="delete"
        color={ completed  ? 'green' : 'gray'}
        onClick={ onComplete }
    />;;
}

export { CompleteIcon };