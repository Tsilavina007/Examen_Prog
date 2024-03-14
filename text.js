

import assert  from "assert";
import describe from "mocha";
import howManyDuplicateAreEvem from "./script";

describe('howManyDuplicateAreEvem', () => {
    it('should return the correct number of duplicate prime numbers', () => {
        assert.strictEqual(howManyDuplicateAreEvem([2, 6, -4, -2, 3, 4]), 2);
        assert.strictEqual(howManyDuplicateAreEvem([1, 3, 5, 7]), 0);
        assert.strictEqual(howManyDuplicateAreEvem([2, 2, 2, 2]), 1);
        // assert.strictEqual(howManyDuplicateAreEvem([]), 0);
        
    });
});