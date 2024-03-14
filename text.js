import {level1} from "./level1.js";
import {level2} from "./level2.js";
import {level3} from "./level3.js";

import {assert}  from "chai";

describe('level1', () => {
    it('should return the three-letter string representing the dominant genes', () => {
        assert.strictEqual(level1(["AYC", "AYZ"]), "AYZ");
        assert.strictEqual(level1(["XYC", "AYZ"]), "XYZ");
        assert.strictEqual(level1(["AYZ", "AYZ"]), "AYZ");
    });
});


describe('level2', () => {
    it('should return the number of pairs if there are pairs ', () => {
        assert.strictEqual(level2(6, ["1x2x3","1x2x3", "2x3x4", "3x4x5"]), 2);
        assert.strictEqual(level2(6, ["1x2x3","1x2x3", "2x3x4", "2x3x4", "3x4x5"]), 4);
    });
    it('should return 0 if there is no pair ', () => {
        assert.strictEqual(level2(6, ["1x2x3", "2x3x4", "3x4x5"]), 0);
    });
    
});


describe('level3', () => {
    it('should return the volume contained at the end of the recipe in the left and right tray respectively', () => {
        assert.strictEqual(level2(6, ["1x2x3","1x2x3", "2x3x4", "3x4x5"]), 2);
        assert.strictEqual(level2(6, ["1x2x3","1x2x3", "2x3x4", "2x3x4", "3x4x5"]), 4);
    });
    it('should return the volume contained at the end of the recipe in the left corr ectly', () => {
        assert.strictEqual(level2(6, ["1x2x3","1x2x3", "2x3x4", "3x4x5"]), 2);
        assert.strictEqual(level2(6, ["1x2x3","1x2x3", "2x3x4", "2x3x4", "3x4x5"]), 4);
    });
    it('should return the volume contained at the end of the recipe in the right correctly', () => {
        assert.strictEqual(level2(6, ["1x2x3","1x2x3", "2x3x4", "3x4x5"]), 2);
        assert.strictEqual(level2(6, ["1x2x3","1x2x3", "2x3x4", "2x3x4", "3x4x5"]), 4);
    });
    
});
