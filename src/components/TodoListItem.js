import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onToggleCompletePressed, onCompletePressed, onTodoPressed }) => (
    <div className="todo-item-container card">
        <h3 className="card-header"></h3>
        <div className="card-body text-center">
            <h4 className="card-title">{todo.text}</h4>
            <div className="button-container">
                {todo.isCompleted ?
                    <button className="completed-button btn btn-dark"
                        onClick={() => onToggleCompletePressed(todo.id)}
                    >
                        Mark As Todo
                    </button> :
                    <button className="completed-button btn btn-primary"
                        onClick={() => onToggleCompletePressed(todo.id)}
                    >
                        Mark As Completed
                    </button>
                }
                <button
                    className="remove-button btn btn-danger"
                    onClick={() => onRemovePressed(todo.id)}
                >
                    Remove
                </button>
            </div>
        </div>
    </div>
);

export default TodoListItem;
