"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERNAME = void 0;
const shared_1 = require("../shared");
exports.USERNAME = {
    get: (length = 3, useDash = true, useDot = true, startWithChar = true, endWithChar = true, fullLine = true, flags) => (0, shared_1.reGet)((0, shared_1.regexpUsername)(length, useDash, useDot, startWithChar, endWithChar), fullLine, flags),
    verify: (text, length = 3, useDash = true, useDot = true, startWithChar = true, endWithChar = true) => (0, shared_1.reVerify)((0, shared_1.regexpUsername)(length, useDash, useDot, startWithChar, endWithChar), text),
};
//# sourceMappingURL=username.js.map