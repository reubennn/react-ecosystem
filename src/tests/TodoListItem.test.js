import { expect } from "chai";
import { getBorderStyleForDate } from "../components/TodoListItem";

describe("styled-components:", () => {
    it("getBorderStyleForDate: returns none when the date is less than 8 days ago", () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 3);

        const expected = "none";
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.equal(expected);
    });

    it("getBorderStyleForDate: returns a border when the date is more than 8 days ago", () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 10);

        const expected = "1px solid red";
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.equal(expected);
    });
});
