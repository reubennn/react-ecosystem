import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo }) => (
    <div className="todo-item-container card">
        <h3 className="card-header"></h3>
        <div className="card-body text-center">
            <h4 className="card-title">{todo.text}</h4>
            <p class="card-text">Todo information here...</p>
            <div className="button-container">
                <button className="completed-button btn btn-primary">Mark As Completed</button>
                <button className="remove-button btn btn-danger">Remove</button>
            </div>
        </div>
    </div>
);

export default TodoListItem;
