import "node-fetch";
import fetchMock from "fetch-mock";
import { expect } from "chai";
import sinon from "sinon";
import { loadTodos } from "../thunks/todoThunks";

describe("REDUX THUNK: loadTodos():", () => {
    it("Dispatches the correct actions in the success scenario", async () => {
        /* Create a fake function that keeps track of which arguments
        it was called with */
        const fakeDispatch = sinon.spy();

        /* Define a fake todo that we want our fake fetch to return when it is called
         * - Does not matter that the properties do match match real todos */
        const fakeTodos = [
            { text: "1" },
            { text: "2" }
        ];

        // Perform the fake fetch, returning the fakeTodos
        fetchMock.get("http://localhost:4000/todos-delay", fakeTodos);

        const expectedFirstAction = {
            type: "LOAD_TODOS_IN_PROGRESS",
        };
        const expectedSecondAction = {
            type: "LOAD_TODOS_SUCCESS",
            payload: {
                todos: fakeTodos,
            },
        };

        // Call the thunk, passing the fakeDispatch
        await loadTodos()(fakeDispatch);

        /* Test that loadTodos() dispatches the actions we expect
         * it to in the correct order */

        /* First time fakeDispatch is called
         * getCall(0) => first time it was called
        */
        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);

        // Second time fakeDispatch is called
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

        // Reset fetch to original state
        fetchMock.reset();
    });
});
