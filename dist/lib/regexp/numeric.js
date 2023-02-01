"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NUMERIC = void 0;
const shared_1 = require("../shared");
exports.NUMERIC = {
    get: (minLength, maxLength, fullLine = true, flags) => (0, shared_1.reGet)((0, shared_1.regexpNumeric)(minLength, maxLength), fullLine, flags),
    verify: (text, minLength, maxLength) => (0, shared_1.reVerify)((0, shared_1.regexpNumeric)(minLength, maxLength), text),
    find: (text, minLength, maxLength) => (0, shared_1.reFind)((0, shared_1.regexpNumeric)(minLength, maxLength), text),
    replace: (text, replaceWith = '', minLength, maxLength) => (0, shared_1.reReplace)((0, shared_1.regexpNumeric)(minLength, maxLength), text, replaceWith),
};
//# sourceMappingURL=numeric.js.map