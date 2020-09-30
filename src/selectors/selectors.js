import { createRef } from "react";
import { createSelector } from "reselect";

export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;

/**
 * createSelector: takes a variable number of arguments,
 * each of which is some sort of selector
 * last element: function with return value of the entire selector
 *
 * getIncompleteTodos(state) => gets all todos with isCompleted = false
 */
export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => // This is the return value from getTodos
        todos.filter(todo => !todo.isCompleted),
);

/**
 * Below example shows the use of multiple selectors using reselect
 */
// export const getIncompleteTodos = createSelector(
//     getTodos,
//     getTodosLoading,
//     (todos, isLoading) =>
//         isLoading ?
//         [] :
//         todos.filter(todo => !todo.isCompleted),
// );

/**
 * Example of a pure function
 * Only will recompute/update state if changed
 *
 * CreateSelector: Return value of this function will only
 * change when return value of the selectors we pass as arguments changes
 */
export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
);
