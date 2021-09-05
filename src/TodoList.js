import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList () {
    /// initilize the list with an empty array
    const [todos, setTodos] = useState([]);

    //create a todo
    const create = () => {
        setTodos(todos => [...todos, newTodo]);
    }

    //update a todo
    const update = (id, updatedTask) => {
        setTodos(todos => 
            todos.map(todo => 
                todo.id === id ? {...todo, task: updatedTask} : todo ))};
    
    //remove a todo by id
    const remove = id => {
        setTodos(todos => todo.filter(todo => todo.id !== id))
    }

    const todoComponents = todos.map(todo => (
        <Todo
          remove={remove}
          key={todo.id}
          id={todo.id}
          task={todo.task}
          update={update}
        />
      ));
    
      return (
        <div>
          <NewTodoForm createTodo={create} />
          <ul>{todoComponents}</ul>
        </div>
      );
};


export default TodoList;