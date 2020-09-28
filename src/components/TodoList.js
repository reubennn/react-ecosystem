import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm";
import {
    removeTodo,
    markTodoAsCompleted,
    markAsTodo
} from "../actions/todoActions";
import { loadTodos } from "../thunks/todoThunks";
import "./TodoList.css";

// todos has default property to avoid getting an error
const TodoList = ({ todos = [], onRemovePressed, onCompletePressed, onTodoPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    const loadingMessage = <div>Loading Todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map((todo) =>
                < TodoListItem
                    key={todo.text}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletePressed={onCompletePressed}
                    onTodoPressed={onTodoPressed} />)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(markTodoAsCompleted(text)),
    onTodoPressed: text => dispatch(markAsTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
