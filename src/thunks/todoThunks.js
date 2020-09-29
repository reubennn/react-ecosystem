import {
    createTodo,
    removeTodo,
    loadTodosFailure,
    loadTodosInProgress,
    loadTodosSuccess
} from "../actions/todoActions";

/**
 * 
 */
export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch("http://localhost:4000/todos-delay");
        const todos = await response.json();

        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e))
    }
};

/**
 *  Returns async function with dispatch as the argument
 * @param {String} text
 *
 */
export const addTodoRequest = (text) => async (dispatch) => {
    try {
        const body = JSON.stringify({ text });
        const response = await fetch("http://localhost:4000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body,
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
};

export const removeTodoRequest = (id) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:4000/todos/${id}`, {
            method: "DELETE",
        });
        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
};

export const displayAlert = (text) => () => {
    alert(text);
};
