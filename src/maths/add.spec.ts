import { add } from "./add"

describe("add.ts", () => {
    it('should add 2 numbers', () => {
        const result = add(2, 5);
        expect(result).toBe(7);
    })
})
