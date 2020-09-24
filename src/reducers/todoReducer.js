import { CREATE_TODO, REMOVE_TODO } from "../actions/todoActions";

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
