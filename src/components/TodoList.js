import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm";
import {
    loadTodos,
    removeTodoRequest,
    markTodoAsCompleteRequest,
    markAsTodoRequest,
} from "../thunks/todoThunks";
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
            {todos.map((todo, index) => {
                return < TodoListItem
                    key={index}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletePressed={onCompletePressed}
                    onTodoPressed={onTodoPressed} />
            })}
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
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(markTodoAsCompleteRequest(id)),
    onTodoPressed: text => dispatch(markAsTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
