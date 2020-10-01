import { expect } from "chai";
import { todos } from "../reducers/todoReducers";

describe("REDUX REDUCER: To-dos:", () => {
    it("Adds a new to-do when CREATE_TODO action is received", () => {
        const fakeTodo = {
            text: "hello",
            isCompleted: false
        };
        const fakeAction = {
            type: "CREATE_TODO",
            payload: {
                todo: fakeTodo,
            },
        };
        const originalState = {
            isLoading: false,
            data: [],
        };

        const expected = {
            isLoading: false,
            data: [fakeTodo],
        };
        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
});
