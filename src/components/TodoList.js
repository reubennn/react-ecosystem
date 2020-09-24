import React from "react";
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

// todos has default property to avoid getting an error
const TodoList = ({ todos = [{text: "Hello"}]}) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo) => < TodoListItem todo={todo} />)}
    </div>
);

export default TodoList;
