"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testReplace = exports.testFind = exports.testVerify = void 0;
const shared_1 = require("../../lib/shared");
const testVerify = (title, pattern, valid, invalid) => {
    test(`RE ${title}: verify`, () => {
        valid.forEach((value) => {
            const test = (0, shared_1.reVerify)(pattern, value);
            expect(test).toBe(true);
        });
        invalid.forEach((value) => {
            const test = (0, shared_1.reVerify)(pattern, value);
            expect(test).toBe(false);
        });
    });
};
exports.testVerify = testVerify;
const testFind = (title, pattern, valid, invalid) => {
    test(`RE ${title}: find`, () => {
        const test1 = (0, shared_1.reFind)(pattern, valid.join(' '));
        expect(test1.length).toBe(valid.length);
        const test2 = (0, shared_1.reFind)(pattern, valid.join('\n'));
        expect(test2.length).toBe(valid.length);
        const test3 = (0, shared_1.reFind)(pattern, invalid.join(' '));
        expect(test3.length).toBe(0);
        const test4 = (0, shared_1.reFind)(pattern, invalid.join('\n'));
        expect(test4.length).toBe(0);
    });
};
exports.testFind = testFind;
const testReplace = (title, pattern, valid, invalid) => {
    test(`RE ${title}: replace`, () => {
        const test1 = (0, shared_1.reReplace)(pattern, valid.join(' '));
        expect(test1.length).toBe(valid.length - 1);
        const test2 = (0, shared_1.reReplace)(pattern, valid.join('\n'));
        expect(test2.length).toBe(valid.length - 1);
        const test3 = (0, shared_1.reReplace)(pattern, invalid.join(' '));
        expect(test3).toBe(invalid.join(' '));
        const test4 = (0, shared_1.reReplace)(pattern, invalid.join('\n'));
        expect(test4).toBe(invalid.join('\n'));
    });
};
exports.testReplace = testReplace;
//# sourceMappingURL=_.js.map