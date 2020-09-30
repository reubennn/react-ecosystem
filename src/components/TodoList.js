import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm";
import {
    getTodos,
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos,
} from "../selectors/selectors";
import {
    loadTodos,
    removeTodoRequest,
    toggleTodoCompleteRequest,
} from "../thunks/todoThunks";
import "./TodoList.css";

// todos has default property to avoid getting an error
const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onToggleCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    const loadingMessage = <div>Loading Todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            <h3 className="status-title text-center">Incomplete:</h3>
            {incompleteTodos.map((todo, index) => {
                return < TodoListItem
                    key={index}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onToggleCompletePressed={onToggleCompletePressed} />
            })}
            <h3 className="status-title text-center">Completed:</h3>
            {completedTodos.map((todo, index) => {
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
    // Use Redux selectors
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onToggleCompletePressed: id => dispatch(toggleTodoCompleteRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
