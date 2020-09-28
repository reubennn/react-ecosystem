import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm";
import {
    removeTodo,
    markTodoAsCompleted,
    markAsTodo
} from "../actions/todoActions";
import { displayAlert } from "../thunks/todoThunks";
import "./TodoList.css";

// todos has default property to avoid getting an error
const TodoList = ({ todos = [], onRemovePressed, onCompletePressed, onTodoPressed, onDisplayAlertClicked }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo) => < TodoListItem todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletePressed={onDisplayAlertClicked}
            onTodoPressed={onTodoPressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(markTodoAsCompleted(text)),
    onTodoPressed: text => dispatch(markAsTodo(text)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
