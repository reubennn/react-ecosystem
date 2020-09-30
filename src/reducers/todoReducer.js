import {
    CREATE_TODO,
    REMOVE_TODO,
    TOGGLE_TODO_COMPLETED,
    LOAD_TODOS_FAILURE,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
} from "../actions/todoActions";

const initialState = {
    isLoading: false,
    data: [],
}

export const todos = (state = initialState, action) => {
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
            return {
                ...state, // Spread operator to get the rest of the state untouched
                data: state.data.concat(todo),
            };
        }
        case (REMOVE_TODO): {
            const { todo: todoToRemove } = payload;
            /**
             * Remove the Todo with the text property in the payload
             * using filter => keep only Todos that do not match the text property
             */
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== todoToRemove.id),
            };
        }
        case (TOGGLE_TODO_COMPLETED): {
            const { todo: updatedTodo } = payload;
            return {
                ...state,
                data: state.data.map(todo => {
                    if (todo.id === updatedTodo.id) {
                        return updatedTodo;
                    }
                    return todo;
                }),
            };
        }
        case (LOAD_TODOS_SUCCESS): {
            const { todos } = payload;
            return {
                ...state,
                isLoading: false,
                data: todos,
            };
        }
        case (LOAD_TODOS_IN_PROGRESS): {
            return {
                ...state,
                isLoading: true,
            }
        }
        case (LOAD_TODOS_FAILURE): {
            return {
                ...state,
                isLoading: false,
            }
        }
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
