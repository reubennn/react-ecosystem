import React from "react";
// import "./TodoListItem.css";
import styled from "styled-components";

/**
 * Styled-Components
 */
const Button = styled.button`
    margin-left: 0.25rem;
    margin-right: 0.25rem;
`;

const TodoItemContainer = styled.div.attrs({
    className: "card",
})`
    &&& {
        width: 65%;
        margin: auto;
        box-shadow: 0 1px 2px grey;
    }
`;

/**
 * Inherits styles from TodoItemContainer
 *
 * Uses style component based on props
 * If the To-do has been created for more than 8 days, display a red box
 *        ~ 86400000 = 1 day in milliseconds
 */
const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    &&& {
        border: ${props =>
        (new Date(props.createdOn) > new Date(Date.now() - 86400000 * 8)) ?
            "none" :
            "1px solid red"};
    }
`;

const TodoListItem = ({ todo, onRemovePressed, onToggleCompletePressed }) => {
    const Container = todo.isCompleted ?
        TodoItemContainer :
        TodoItemContainerWithWarning
    return (
        <Container createdOn={todo.createdOn}>
            <div className="card-body text-center">
                <h4 className="card-title">{todo.text}</h4>
                <p>
                    Created on:&nbsp;
                {(new Date(todo.createdOn)).toLocaleDateString()}
                </p>
                <div className="button-container">
                    {todo.isCompleted ?
                        <Button className="btn btn-dark"
                            onClick={() => onToggleCompletePressed(todo.id)}
                        >
                            Mark As Todo
                    </Button> :
                        <Button className="btn btn-primary"
                            onClick={() => onToggleCompletePressed(todo.id)}
                        >
                            Mark As Completed
                    </Button>
                    }
                    <Button
                        className="btn btn-danger"
                        onClick={() => onRemovePressed(todo.id)}
                    >
                        Remove
                </Button>
                </div>
            </div>
        </Container>
    )
};

export default TodoListItem;
