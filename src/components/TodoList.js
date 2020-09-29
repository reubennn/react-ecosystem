import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm";
import {
    loadTodos,
    removeTodoRequest,
    toggleTodoCompleteRequest,
} from "../thunks/todoThunks";
import "./TodoList.css";

// todos has default property to avoid getting an error
const TodoList = ({ todos = [], onRemovePressed, onToggleCompletePressed, isLoading, startLoadingTodos }) => {
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
                    onToggleCompletePressed={onToggleCompletePressed} />
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
    onToggleCompletePressed: id => dispatch(toggleTodoCompleteRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
