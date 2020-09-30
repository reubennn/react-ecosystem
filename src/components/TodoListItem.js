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
        border: ${props => // Style component based on props
        /* If the To-do has been created for more than 5 days, display a red box
         * 6640000 = 1 day in milliseconds */
        (new Date(props.createdOn) > new Date(Date.now() - 8640000 * 5)) ?
            "none" :
            "1px solid red"};
    }
`

const TodoListItem = ({ todo, onRemovePressed, onToggleCompletePressed }) => (
    <TodoItemContainer createdOn={todo.createdOn}>
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
    </TodoItemContainer>
);

export default TodoListItem;
