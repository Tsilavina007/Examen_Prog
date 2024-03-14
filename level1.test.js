
import {level1} from "./level1.js";
// import {level2} from "./level2.js";
// import {level3} from "./level3.js";

import {assert}  from "chai";

describe('level1', () => {
    it('should return the correct answer', () => {
        assert.strictEqual(level1(["AYC", "AYZ"]), "AYZ");
        assert.strictEqual(level1(["XYC", "AYZ"]), "XYZ");
        assert.strictEqual(level1(["AYZ", "AYZ"]), "AYZ");
    });
});
