import {
    CREATE_TODO,
    REMOVE_TODO,
    TOGGLE_TODO_COMPLETED,
    LOAD_TODOS_FAILURE,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
} from "../actions/todoActions";

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case (LOAD_TODOS_IN_PROGRESS):
            return true;
        case (LOAD_TODOS_SUCCESS):
        case (LOAD_TODOS_FAILURE):
            return false;
        default:
            return state;
    }
};

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case (CREATE_TODO): {
            const { todo } = payload; // This is the Todo text
            // Create new Todo item
            /**
             * Return current state with the new Todo concatenated onto the end
             * Array is not mutated using concat
             * We need to ensure we do not mutate the state in any way
             */
            return state.concat(todo);
        }
        case (REMOVE_TODO): {
            const { todo: todoToRemove } = payload;
            /**
             * Remove the Todo with the text property in the payload
             * using filter => keep only Todos that do not match the text property
             */
            return state.filter(todo => todo.id !== todoToRemove.id);
        }
        case (TOGGLE_TODO_COMPLETED): {
            const { todo: updatedTodo } = payload;
            return state.map(todo => {
                if (todo.id === updatedTodo.id) {
                    return updatedTodo;
                }
                return todo;
            });
        }
        case (LOAD_TODOS_SUCCESS): {
            const { todos } = payload;
            return todos;
        }
        case (LOAD_TODOS_IN_PROGRESS):
        case (LOAD_TODOS_FAILURE):
        default: {
            /** todos reducer gets called when any Action is triggered in the App
             * If switch block makes it to the default case, then it is an action
             * that we aren't really concerned about so we can simple return the
             * state as it is
             */
            return state;
        }
    }
};
