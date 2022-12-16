import { nop } from "../src/misc";

describe('misc', () => {
    describe('nop', () => {
        test('should return undefined', () => {
            expect(nop()).not.toBeDefined();
        });
    });
});