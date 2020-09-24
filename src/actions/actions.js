export const CREATE_TODO = "CREATE_TODO";

/* Action Creator = Function that takes extra info as argument
 * Returns action object with info as payload
*/
export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload: { text },
});

/* To trigger action from a Component, we call the function like so:
 * createTodo("Go to the store"); // Passing the text of the new Todo
*/

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
    type: REMOVE_TODO,
    payload: { text },
});
