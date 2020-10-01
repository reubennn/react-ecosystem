import { expect } from "chai";
import { getCompletedTodos, getIncompleteTodos } from "../selectors/todoSelectors";

describe("REDUX SELECTORS:", () => {
    it("getCompletedTodos: Returns only completed to-dos", () => {
        const fakeTodos = [{
            text: "Say Hello",
            isCompleted: true,
        }, {
            text: "Say Goodbye",
            isCompleted: false,
        }, {
            text: "Climb Mount Everest",
            isCompleted: false,
        }];

        const expected = [{
            text: "Say Hello",
            isCompleted: true,
        }];

        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });

    it("getIncompleteTodos: Returns only incompleted to-dos", () => {
        const fakeTodos = [{
            text: "Say Hello",
            isCompleted: true,
        }, {
            text: "Say Goodbye",
            isCompleted: false,
        }, {
            text: "Climb Mount Everest",
            isCompleted: false,
        }];

        const expected = [{
            text: "Say Goodbye",
            isCompleted: false,
        }, {
            text: "Climb Mount Everest",
            isCompleted: false,
        }];

        const actual = getIncompleteTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});
