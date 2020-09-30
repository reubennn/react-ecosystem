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

const TodoItemContainer = styled.div`
    width: 65%;
    margin: auto;
`


const TodoListItem = ({ todo, onRemovePressed, onToggleCompletePressed, onCompletePressed, onTodoPressed }) => (
    <TodoItemContainer className="card">
        <div className="card-body text-center">
            <h4 className="card-title">{todo.text}</h4>
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
