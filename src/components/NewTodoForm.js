import React, { useState } from "react";
import { connect } from "react-redux"; // Higher order function
import { createTodo } from "../actions/todoActions";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
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
                <button
                    id="new-todo-button"
                    className="btn btn-primary"
                    onClick={() => {
                        const isDuplicateText =
                            todos.some(todo => todo.text === inputValue);
                        if (!isDuplicateText) {
                            onCreatePressed(inputValue);
                            setInputValue("");
                        };
                    }}>
                    Create Todo
                </button>
            </div>
        </div>
    );
};

/**
 * State argument that gets passed is an object that represents the entire Redux state
 * In larger projects, it can include large number of properties representing
 * different pieces of data. (e.g. users, videos, articles...)
 *
 * Takes state object and returns another object that contains the pieces of that state
 * that the component needs access to
 */
const mapStateToProps = state => ({
    todos: state.todos,
});

/**
 * Similar to above. The properties of the object that we return will be passed to 
 * the component as props
 *
 * Takes dispatch function that allows Components to trigger actions that the Redux
 * Store will respond to.
 */
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
