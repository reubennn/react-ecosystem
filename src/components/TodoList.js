import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm";
import {
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos,
} from "../selectors/selectors";
import {
    loadTodos,
    removeTodoRequest,
    toggleTodoCompleteRequest,
} from "../thunks/todoThunks";
// import "./TodoList.css";

/**
 * Styled-Component
 */
const StatusTitle = styled.div`
    color: #fff;
    background-color: #6e6e6e;
    margin: 0.75rem auto 0 auto;
    width: 65%;
    padding: 0.25rem 0;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    border: solid;
    border-radius: 0.25rem;
    border-bottom-style: none;
    border-width: thin;
    border-color: #d9d9d9;
`;

// todos has default property to avoid getting an error
const TodoList = ({
    completedTodos,
    incompleteTodos,
    onRemovePressed,
    onToggleCompletePressed,
    isLoading,
    startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    const loadingMessage = <div>Loading Todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            <StatusTitle >Incomplete</StatusTitle>
            {incompleteTodos.map((todo, index) => {
                return < TodoListItem
                    key={index}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onToggleCompletePressed={onToggleCompletePressed} />
            })}
            <StatusTitle >Complete</StatusTitle>
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
