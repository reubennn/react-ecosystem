export const CREATE_TODO = "CREATE_TODO";

/** Action Creator = Function that takes extra info as argument
 * Returns action object with info as payload
 */
export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload: { text },
});

/**
 * To trigger action from a Component, we call the function like so:
 * createTodo("Go to the store"); // Passing the text of the new Todo
 */
export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
    type: REMOVE_TODO,
    payload: { text },
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markTodoAsCompleted = (text) => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { text },
});

export const MARK_AS_TODO = "MARK_AS_TODO";
export const markAsTodo = (text) => ({
    type: MARK_AS_TODO,
    payload: { text },
});

// Thunk Actions
export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const loadTodosSuccess = (todos) => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos },
});

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
});
