import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="new-todo-form card">
            <div id="new-todo-body" className="card-body">
                <h5 id="new-todo-header" className="card-header">New Todo Form</h5>
                <label for="todo-label">Type your new Todo here:</label>
                <input
                    id="new-todo-input"
                    className="form-control"
                    type="text"
                    placeholder="Add apples to the grocery list..."
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button id="new-todo-button" className="btn btn-primary">Create Todo</button>
            </div>
        </div>
    );
};

export default NewTodoForm;
