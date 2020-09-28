import {
    CREATE_TODO,
    REMOVE_TODO,
    MARK_TODO_AS_COMPLETED,
    MARK_AS_TODO,
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
            const { text } = payload; // This is the Todo text
            // Create new Todo item
            const newTodo = {
                text,
                isCompleted: false,
            };
            /**
             * Return current state with the new Todo concatenated onto the end
             * Array is not mutated using concat
             * We need to ensure we do not mutate the state in any way
             */
            return state.concat(newTodo);
        }
        case (REMOVE_TODO): {
            const { text } = payload;
            /**
             * Remove the Todo with the text property in the payload
             * using filter => keep only Todos that do not match the text property
             */
            return state.filter(todo => todo.text !== text);
        }
        case (MARK_TODO_AS_COMPLETED): {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    return { ...todo, isCompleted: true };
                }
                return todo;
            });
        }
        case (MARK_AS_TODO): {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    return { ...todo, isCompleted: false };
                }
                return todo;
            });
        }
        case (LOAD_TODOS_SUCCESS): {
            const {todos} = payload;
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
