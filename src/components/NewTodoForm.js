import React, { useState } from "react";
import { connect } from "react-redux"; // Higher order function
import { getTodos } from "../selectors/todoSelectors";
import { addTodoRequest } from "../thunks/todoThunks";
import styled from "styled-components";
// import "./NewTodoForm.css";

/**
 * Styled-Components
 */
const NewTodoFormStyled = styled.div.attrs({
    className: "card",
})`
    width: 80%;
	margin: auto;
    margin-bottom: 1.5rem;
    box-shadow: 0 1px 2px grey;
`;

/**
 * &&& ensures highest specificity
 * This is required to override Bootstrap CSS
 */
const NewTodoBody = styled.div.attrs({
    className: "card-body",
})`
    &&& {
        padding: 0;
    }
`;

const NewTodoLabel = styled.label.attrs({
    htmlFor: "todo-text",
})`
    margin: 0.25rem auto;
    width: 100%;
    text-align: center;
`;

const NewTodoInput = styled.input`
    &&& {
        width: 80%;
        margin: 0.25rem auto;
    }
`;

const NewTodoHeader = styled.h5.attrs({
    className: "card-header",
})`
    &&& {
        background-color: #414040;
        color: #fff;
        font-weight: bold;
    }
`;

const NewTodoButton = styled.button`
    &&& {
        margin: 1rem auto 1rem auto;
        display: block;
    }
`;

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <NewTodoFormStyled>
            <NewTodoBody >
                <NewTodoHeader >New To-do Form</NewTodoHeader>
                <NewTodoLabel >Type your new To-do here:</NewTodoLabel>
                <NewTodoInput
                    className="form-control"
                    type="text"
                    placeholder="Add apples to the grocery list..."
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <NewTodoButton
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
                </NewTodoButton>
            </NewTodoBody>
        </NewTodoFormStyled>
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
    todos: getTodos(state),
});

/**
 * Similar to above. The properties of the object that we return will be passed to 
 * the component as props
 *
 * Takes dispatch function that allows Components to trigger actions that the Redux
 * Store will respond to.
 */
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
